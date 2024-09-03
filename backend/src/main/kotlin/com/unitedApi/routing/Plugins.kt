package com.unitedApi.routing

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.CORS
import io.ktor.http.HttpMethod
import io.ktor.http.HttpHeaders
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
    install(CORS) {
        // Allow specific HTTP methods
        allowMethod(HttpMethod.Options)
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Put)
        allowMethod(HttpMethod.Delete)

        // Allow specific headers
        allowHeader(HttpHeaders.ContentType)
        allowHeader(HttpHeaders.Accept)
        allowHeader(HttpHeaders.Authorization)

        // Allow multiple hosts
        allowHost("localhost:5173", schemes = listOf("http")) // React development
        allowHost("frontend:5173", schemes = listOf("http")) // React development in Docker

        // Additional CORS settings
        allowCredentials = true
    }
}
