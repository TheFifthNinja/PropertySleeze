package com.unitedApi

import com.unitedApi.routing.configurePlugins
import com.unitedApi.routing.configureRouting
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configurePlugins()
    configureRouting()
}


