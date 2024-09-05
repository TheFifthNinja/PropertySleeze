package com.unitedApi.routing

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import com.unitedApi.dao.*
import com.unitedApi.model.*
import io.ktor.http.content.*
import io.ktor.server.http.content.*
import java.io.File
import java.nio.file.Paths

fun Application.configureRouting() {
    routing {
        staticFiles("pictures", File("app/pictures"))
        get("/") {
            call.respondText("Hello World!")
        }
        post("/picture")
        {
            val pics = call.receiveMultipart()

            pics.forEachPart { part ->
                if (part is PartData.FileItem) {
                    println(Paths.get("").toAbsolutePath().toString())
                    val fileName = part.originalFileName as String
                    val fileBytes = part.streamProvider().readBytes()
                    File("app/pictures/$fileName").writeBytes(fileBytes)
                }
                part.dispose()
            }
            call.respond(HttpStatusCode.Created)
        }
        renterRouting()
        rentingRouting()
        propertyRouting()
    }
}

fun Route.renterRouting() {
    route("/renter") {
        // Get all
        get("") {
            call.respond(renterDAO.getRenters())
        }
        // Get Renter by username
        get("/{username}") {
            val username = call.parameters["username"]
            if (username != null) {
                val renter = renterDAO.getRenter(username)
                if (renter != null) {
                    call.respond(renter)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Renter not found")
                }
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing username")
            }
        }
        // Create Renter
        post("") {
            val renter = call.receive<Renter>()
            renterDAO.createRenter(renter)
            call.respond(HttpStatusCode.Created)
        }
    }
}

fun Route.rentingRouting() {
    route("/renting") {
        // Get all
        get("") {
            call.respond(rentingDAO.getRentings())
        }
        // Get renting by username and address
        get("/{username}/{address}") {
            val username = call.parameters["username"]
            val address = call.parameters["address"]
            if (username != null && address != null) {
                val renting = rentingDAO.getRenting(username, address)
                if (renting != null) {
                    call.respond(renting)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Renting not found")
                }
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing username or address")
            }
        }
        // Get renting by username
        get("/renter/{username}") {
            val username = call.parameters["username"]
            if (username != null) {
                call.respond(rentingDAO.getRentingByUsername(username))
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing username")
            }
        }
        // Get renting by address
        get("/property/{address}") {
            val address = call.parameters["address"]
            if (address != null) {
                call.respond(rentingDAO.getRentingByAddress(address))
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing address")
            }
        }
        // Create Renting
        post("") {
            val renting = call.receive<Renting>()
            rentingDAO.createRenting(renting)
            call.respond(HttpStatusCode.Created)
        }
    }
}

fun Route.propertyRouting() {
    route("/property") {
        // Get all
        get("") {
            call.respond(propertyDAO.getPropertys())
        }
        // Get property by address
        get("/{address}") {
            val address = call.parameters["address"]
            if (address != null) {
                val property = propertyDAO.getProperty(address)
                if (property != null) {
                    call.respond(property)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Property not found")
                }
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing address")
            }
        }
        // Get properties by property manager username
        get("/byManger/{username}") {
            val username = call.parameters["username"]
            if (username != null) {
                call.respond(propertyDAO.getPropertyByPropertyManger(username))
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing username")
            }
        }
        // Create Property
        post("") {
            val property = call.receive<Property>()
            propertyDAO.createProperty(property)
            call.respond(HttpStatusCode.Created)
        }
        get("/notRenting") {
            call.respond(propertyDAO.getAllNonRentedPropertys())
        }
    }
}
