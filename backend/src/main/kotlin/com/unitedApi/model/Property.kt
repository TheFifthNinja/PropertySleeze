package com.unitedApi.model

import kotlinx.serialization.Serializable
import java.math.BigDecimal

@Serializable
data class Property(val address:String,@Serializable(with = BigDecimalSerializer::class) val rent:BigDecimal,val username:String,val picture:ByteArray,val description:String)

