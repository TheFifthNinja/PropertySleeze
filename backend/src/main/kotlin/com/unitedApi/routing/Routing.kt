package com.unitedApi.routing

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import com.unitedApi.dao.*
import com.unitedApi.model.*

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        renterRouting()
        rentingRouting()
        propertyRouting()
        propertyMangerRouting()
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
            call.respond(propertyDAO.getProperties())
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
                call.respond(propertyDAO.getPropertiesByPropertyManager(username))
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
    }
}

fun Route.propertyMangerRouting() {
    route("/propertyManger") {
        // Get all
        get("") {
            call.respond(propertyMangerDAO.getPropertyManagers())
        }
        // Sign-in
        get("/{username}") {
            val username = call.parameters["username"]
            if (username != null) {
                val propertyManager = propertyMangerDAO.getPropertyManager(username)
                if (propertyManager != null) {
                    call.respond(propertyManager)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Property manager not found")
                }
            } else {
                call.respond(HttpStatusCode.BadRequest, "Missing username")
            }
        }
        // Create Account
        post("") {
            val propertyManager = call.receive<PropertyManager>()
            propertyMangerDAO.createPropertyManager(propertyManager)
            call.respond(HttpStatusCode.Created)
        }
    }
}
