package com.unitedApi

import com.unitedApi.routing.configurePlugins
import com.unitedApi.routing.configureRouting
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.http.HttpMethod
import io.ktor.http.HttpHeaders

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    install(CORS) {
        anyHost()
        allowHeader(HttpHeaders.ContentType)
        allowMethod(HttpMethod.Delete)
    }
    configurePlugins()
    configureRouting()
}


