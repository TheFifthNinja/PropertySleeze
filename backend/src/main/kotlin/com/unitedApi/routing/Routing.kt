package com.unitedApi.routing

import com.typesafe.config.ConfigException.Null
import com.unitedApi.dao.propertyDAO
import com.unitedApi.dao.propertyMangerDAO
import com.unitedApi.dao.renterDAO
import com.unitedApi.dao.rentingDAO
import com.unitedApi.model.Property
import com.unitedApi.model.PropertyManger
import com.unitedApi.model.Renter
import com.unitedApi.model.Renting
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.json.Json

fun Application.configureRouting() {
    routing {
        //Chnage again
        get("/") {
            call.respondText("Hello World!")
            //call.respondText("Cheese")
        }
        renterRouting()
        rentingRouting()
        propertyRouting()
        propertyMangerRouting()
    }
}

fun Route.renterRouting()
{
    route("/renter")
    {
        get("") {
            call.respond(renterDAO.getRenters())
        }
        get("/{username}") {
            if (!anyNull(call.parameters["username"]))
                renterDAO.getRenter(call.parameters["username"]!!)?.let{
                    call.respond(it)
                } ?: call.response.status(HttpStatusCode.BadRequest)
            else call.response.status(HttpStatusCode.BadRequest)
        }
        post("") {
            renterDAO.createRenter(call.receive<Renter>())
            call.response.status(HttpStatusCode.Created)
        }
    }
}

fun Route.rentingRouting()
{
    route("/renting")
    {
        get("") {
            call.respond(rentingDAO.getRentings())
        }
        get("/{username}/{address}") {
            if (!anyNull(call.parameters["username"], call.parameters["address"]))
                rentingDAO.getRenting(call.parameters["username"]!!, call.parameters["address"]!!)?.let{
                    call.respond(it)
                } ?: call.response.status(HttpStatusCode.BadRequest)
            else call.response.status(HttpStatusCode.BadRequest)
        }
        get("/renter/{username}") {
            if (!anyNull(call.parameters["username"]))
                call.respond(rentingDAO.getRentingByUsername(call.parameters["username"]!!))
            else call.response.status(HttpStatusCode.BadRequest)
        }
        get("/property/{address}") {
            if (!anyNull(call.parameters["address"]))
                call.respond(rentingDAO.getRentingByAddress(call.parameters["address"]!!))
            else call.response.status(HttpStatusCode.BadRequest)
        }
        post("") {
            rentingDAO.createRenting(call.receive<Renting>())
            call.response.status(HttpStatusCode.Created)
        }
    }
}

fun Route.propertyRouting()
{
    route("/property")
    {
        get("") {
            call.respond(propertyDAO.getPropertys())
        }
        get("/{address}")
        {
            if (!anyNull(call.parameters["address"]))
                propertyDAO.getProperty(call.parameters["address"]!!)?.let {
                    call.respond(it)
                } ?: call.response.status(HttpStatusCode.BadRequest)
            else call.response.status(HttpStatusCode.BadRequest)
        }
        get("/byManger/{username}") {
            if (!anyNull(call.parameters["username"]))
                call.respond(propertyDAO.getPropertyByPropertyManger(call.parameters["username"]!!))
            else call.response.status(HttpStatusCode.BadRequest)
        }
        post("") {
            propertyDAO.createProperty(call.receive<Property>())
            call.response.status(HttpStatusCode.Created)
        }
    }
}

fun Route.propertyMangerRouting()
{
    route("/propertyManger")
    {
        get("") {
            call.respond(propertyMangerDAO.getPropertyMangers())
        }
        get("/{username}")
        {
            if (!anyNull(call.parameters["username"]))
                propertyMangerDAO.getPropertyManger(call.parameters["username"]!!)?.let {
                    call.respond(it)
                } ?: call.response.status(HttpStatusCode.BadRequest)
            else call.response.status(HttpStatusCode.BadRequest)
        }
        post("") {
            propertyMangerDAO.createPropertyManger(call.receive<PropertyManger>())
            call.response.status(HttpStatusCode.Created)
        }
    }
}

fun anyNull(vararg a:Any?):Boolean
{
    for (b in a){
        if (b == null)
        {
            return true
        }
    }
    return false
}