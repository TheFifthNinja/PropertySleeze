package com.unitedApi.dao

import com.unitedApi.model.Renting
import com.unitedApi.model.mappingDB
import java.sql.Connection

class RentingImpDAO(val connection: Connection):RentingDAO {
    override fun getRenting(username: String, address: String): Renting? {
        val statement = connection.prepareStatement("SELECT * FROM Renting where username = ? and address = ?")
        statement.setString(1,username)
        statement.setString(2,address)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet, ::Renting).getOrNull(0)
    }

    override fun createRenting(renting: Renting) {
        val statement = connection.prepareStatement("insert into Renting(username,address) values(?,?)")
        statement.setString(1,renting.username)
        statement.setString(2,renting.address)
        statement.executeUpdate()
    }

    override fun getRentings(): List<Renting> {
        val statement = connection.createStatement()
        val resultSet = statement.executeQuery("SELECT * FROM Renting")
        return mappingDB(resultSet, ::Renting)
    }

    override fun getRentingByUsername(username: String): List<Renting> {
        val statement = connection.prepareStatement("SELECT * FROM Renting where username = ?")
        statement.setString(1,username)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet,::Renting)
    }

    override fun getRentingByAddress(address: String): List<Renting> {
        val statement = connection.prepareStatement("SELECT * FROM Renting where address = ?")
        statement.setString(1,address)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet,::Renting)
    }
}