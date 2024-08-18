package com.unitedApi.dao

import com.unitedApi.model.PropertyManger
import com.unitedApi.model.mappingDB
import java.sql.Connection

class PropertyMangerImpDAO(val connection: Connection):PropertyMangerDAO {
    override fun getPropertyManger(username: String): PropertyManger? {
        val statement = connection.prepareStatement("SELECT * FROM PropertyManger where username = ?")
        statement.setString(1,username)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet, ::PropertyManger).getOrNull(0)
    }

    override fun createPropertyManger(propertyManger: PropertyManger) {
        val statement = connection.prepareStatement("insert into PropertyManger(username) values(?)")
        statement.setString(1,propertyManger.username)
        statement.executeUpdate()
    }

    override fun getPropertyMangers(): List<PropertyManger> {
        val statement = connection.createStatement()
        val resultSet = statement.executeQuery("SELECT * FROM PropertyManger")
        return mappingDB(resultSet, ::PropertyManger)
    }
}