package com.unitedApi.dao

import com.unitedApi.model.Renter

interface RenterDAO {
    fun getRenter(username:String): Renter
    fun createRenter(renter:Renter)
    fun getRenters(): List<Renter>
}