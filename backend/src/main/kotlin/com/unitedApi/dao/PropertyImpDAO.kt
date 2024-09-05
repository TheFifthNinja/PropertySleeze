package com.unitedApi.dao

import com.unitedApi.model.Property
import com.unitedApi.model.mappingDB
import java.sql.Connection

class PropertyImpDAO(val connection: Connection):PropertyDAO {
    override fun getProperty(address: String): Property? {
        val statement = connection.prepareStatement("SELECT * FROM Property where address = ?")
        statement.setString(1,address)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet, ::Property).getOrNull(0)
    }

    override fun createProperty(property: Property) {
        val statement = connection.prepareStatement("insert into Property(address,rent,username,picture,description) values(?,?,?,?,?)")
        statement.setString(1,property.address)
        statement.setBigDecimal(2,property.rent)
        statement.setString(3,property.username)
        statement.setString(4,property.picture)
        statement.setString(5,property.description)
        statement.executeUpdate()
    }

    override fun getPropertys(): List<Property> {
        val statement = connection.createStatement()
        val resultSet = statement.executeQuery("SELECT * FROM Property")
        return mappingDB(resultSet,::Property)
    }

    override fun getPropertyByPropertyManger(username: String): List<Property> {
        val statement = connection.prepareStatement("SELECT * FROM Property where username = ?")
        statement.setString(1,username)
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet, ::Property)
    }

    override fun getAllNonRentedPropertys(): List<Property> {
        val statement = connection.prepareStatement("SELECT * FROM Property where username not in (Select username from Renting)")
        val resultSet = statement.executeQuery()
        return mappingDB(resultSet, ::Property)
    }
}