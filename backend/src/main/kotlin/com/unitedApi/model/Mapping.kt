package com.unitedApi.model

import io.ktor.util.reflect.*
import java.sql.ResultSet
import kotlin.reflect.KClass
import kotlin.reflect.KCallable
import kotlin.reflect.KParameter
import kotlin.reflect.javaType
import kotlin.reflect.jvm.internal.impl.util.ArrayMap

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
                else -> throw Exception("Unknown type:"+it.type+" For "+ it.name)
            }
        }
        l.add(classes.callBy(map))
    }
    return l
}