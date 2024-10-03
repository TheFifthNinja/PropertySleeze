package com.unitedApi.dao

import kotlinx.coroutines.runBlocking
import java.sql.Connection
import java.sql.DriverManager

val dbConnection: Connection = DriverManager.getConnection(
    "jdbc:postgresql://3.224.104.14:5432/propertysleeze",
    "psleeze",
    "ps"
)

val propertyDAO: PropertyDAO = PropertyImpDAO(dbConnection).apply { runBlocking {} }
val renterDAO: RenterDAO = RenterImpDAO(dbConnection).apply { runBlocking {} }
val rentingDAO: RentingDAO = RentingImpDAO(dbConnection).apply { runBlocking {} }
