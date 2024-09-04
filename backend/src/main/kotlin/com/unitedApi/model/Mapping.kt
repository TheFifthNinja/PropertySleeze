package com.unitedApi.model

import java.sql.ResultSet
import kotlin.reflect.KCallable
import kotlin.reflect.KParameter
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import java.math.BigDecimal


fun <T> mappingDB(resultSet: ResultSet,classes: KCallable<T>):List<T>
{
    val l = ArrayList<T>()
    while(resultSet.next()) {
        val map = HashMap<KParameter, Any?>()
        classes.parameters.forEach {
            when(it.type.toString()){
                "kotlin.String" -> map[it] = resultSet.getString(it.name)
                "kotlin.Int" -> map[it] = resultSet.getInt(it.name)
                "java.sql.Date" -> map[it] = resultSet.getDate(it.name)
                "java.math.BigDecimal" -> map[it] = resultSet.getBigDecimal(it.name)
                else -> throw Exception("Unknown type:"+it.type+" For "+ it.name)
            }
        }
        l.add(classes.callBy(map))
    }
    return l
}

object BigDecimalSerializer: KSerializer<BigDecimal> {
    override fun deserialize(decoder: Decoder): BigDecimal {
        return decoder.decodeString().toBigDecimal()
    }

    override fun serialize(encoder: Encoder, value: BigDecimal) {
        encoder.encodeString(value.toPlainString())
    }

    override val descriptor: SerialDescriptor
        get() = PrimitiveSerialDescriptor("BigDecimal", PrimitiveKind.STRING)
}