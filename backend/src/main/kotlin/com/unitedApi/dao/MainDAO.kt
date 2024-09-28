package com.unitedApi.dao

import kotlinx.coroutines.runBlocking
import java.sql.Connection
import java.sql.DriverManager

val dbConnection: Connection = DriverManager.getConnection(
    System.getenv("DB_URL") ?: "jdbc:postgresql://localhost:5432/propertysleeze",
    System.getenv("DB_USER") ?: "psleeze",
    System.getenv("DB_PASSWORD") ?: "ps"
)

val propertyDAO: PropertyDAO = PropertyImpDAO(dbConnection).apply { runBlocking {} }
val renterDAO: RenterDAO = RenterImpDAO(dbConnection).apply { runBlocking {} }
val rentingDAO: RentingDAO = RentingImpDAO(dbConnection).apply { runBlocking {} }
