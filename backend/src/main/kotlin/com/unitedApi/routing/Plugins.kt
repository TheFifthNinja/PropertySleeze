package com.unitedApi.routing

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.defaultheaders.*
import io.ktor.server.plugins.swagger.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configurePlugins() {
    routing {
        swaggerUI(path = "openapi",swaggerFile = "openapi/documentation.yaml")
        get("/json/kotlinx-serialization") {
            call.respond(mapOf("hello" to "world"))
        }
    }

    install(DefaultHeaders) {
        header("X-Engine", "Ktor") // will send this header with each response
    }
    install(ContentNegotiation) {
        json()
    }
}
