package com.unitedApi.routing

import io.ktor.server.application.*
import io.ktor.server.routing.*
import io.ktor.server.response.*

fun Route.CustomerRounting()
{
    route("customer")
    {
        get("") {
            call.respondText("Cheese")
        }
    }
}
