package com.unitedApi.dao

import com.unitedApi.model.Renter
import com.unitedApi.model.mappingDB
import java.sql.Connection

class RenterImpDAO(val connection: Connection):RenterDAO {
    override fun getRenter(username: String): Renter? {
        val statement = connection.prepareStatement("SELECT * FROM Renter where username = ?")
        statement.setString(1,username)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet,::Renter).getOrNull(0)
    }

    override fun createRenter(renter: Renter) {
        val statement = connection.prepareStatement("insert into Renter(username,password) values(?,?)")
        statement.setString(1,renter.username)
        statement.setString(2,renter.password)
        statement.executeUpdate()
    }

    override fun getRenters(): List<Renter> {
        val statement = connection.createStatement()
        val resultSet = statement.executeQuery("SELECT * FROM Renter")
        return mappingDB(resultSet,::Renter)
    }
}