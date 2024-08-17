package com.unitedApi.dao

import kotlinx.coroutines.runBlocking
import java.sql.Connection
import java.sql.DriverManager

val dbConnection: Connection = DriverManager.getConnection(
    "jdbc:postgresql://db:5432/ktorjournal",
    "postgres","postgres"
)