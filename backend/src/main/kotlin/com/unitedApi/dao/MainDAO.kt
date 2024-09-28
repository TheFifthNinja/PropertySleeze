package com.unitedApi.dao

import kotlinx.coroutines.runBlocking
import java.sql.Connection
import java.sql.DriverManager

val dbConnection: Connection = DriverManager.getConnection(
    "jdbc:postgresql://db:5432/propertysleeze",
    "postgres","postgres"
)

val propertyDAO: PropertyDAO = PropertyImpDAO(dbConnection).apply { runBlocking {} }
val renterDAO: RenterDAO = RenterImpDAO(dbConnection).apply { runBlocking {} }
val rentingDAO: RentingDAO = RentingImpDAO(dbConnection).apply { runBlocking {} }
