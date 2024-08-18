package com.unitedApi.dao

import com.unitedApi.model.PropertyManger

interface PropertyMangerDAO {
    fun getPropertyManger(username:String): PropertyManger?
    fun createPropertyManger(propertyManger:PropertyManger)
    fun getPropertyMangers():List<PropertyManger>
}