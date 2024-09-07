package com.unitedApi.dao

import com.unitedApi.model.Renting

interface RentingDAO {
    fun getRenting(username:String,address:String): Renting?
    fun createRenting(renting: Renting)
    fun getRentings():List<Renting>
    fun getRentingByUsername(username: String):List<Renting>
    fun getRentingByAddress(address: String):List<Renting>
    fun deleteRenting(address: String,username: String)
}