package com.unitedApi.routing

import com.unitedApi.dao.propertyDAO
import com.unitedApi.dao.propertyMangerDAO
import com.unitedApi.dao.renterDAO
import com.unitedApi.dao.rentingDAO
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    routing {
        //Chnage again
        get("/") {
            call.respondText("Hello World!")
            //call.respondText("Cheese")
        }
        renterRounting()
        rentingRounting()
        propertyRounting()
        propertyMangerRounting()
    }
}

fun Route.renterRounting()
{
    route("renter")
    {
        get("") {
            call.respond(renterDAO.getRenters())
        }
    }
}

fun Route.rentingRounting()
{
    route("renting")
    {
        get("") {
            call.respond(rentingDAO.getRentings())
        }
    }
}

fun Route.propertyRounting()
{
    route("property")
    {
        get("") {
            call.respond(propertyDAO.getPropertys())
        }
    }
}

fun Route.propertyMangerRounting()
{
    route("propertyManger")
    {
        get("") {
            call.respond(propertyMangerDAO.getPropertyMangers())
        }
    }
}


