package com.unitedApi.dao

import com.unitedApi.model.Property

interface PropertyDAO {
    fun getProperty(address:String):Property?
    fun createProperty(property:Property)
    fun getPropertys():List<Property>
    fun getPropertyByPropertyManger(username:String):List<Property>
}