package com.unitedApi.dao

import kotlinx.coroutines.runBlocking
import java.sql.Connection
import java.sql.DriverManager

val dbConnection: Connection = DriverManager.getConnection(
    "jdbc:postgresql://52.91.167.41:5432/propertysleeze",
    "postgres","postgres"
)

val propertyDAO: PropertyDAO = PropertyImpDAO(dbConnection).apply { runBlocking {} }
val renterDAO: RenterDAO = RenterImpDAO(dbConnection).apply { runBlocking {} }
val rentingDAO: RentingDAO = RentingImpDAO(dbConnection).apply { runBlocking {} }
