// import { useState, useEffect } from "react"
// import ItemDetail from './ItemDetail'
// import { useParams } from "react-router-dom"



// const ItemDetailContainer =() =>{
// const [detalleProd, setDetalleProd]= useState({})
// const params= useParams()
//  console.log(params)



//     return(
//         <h1>Hola Mundo</h1>
       
//     )
// } 

// export default ItemDetailContainer

import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerUnProducto, traerProductos } from '../mock/Asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 const [detalleProd, setDetalleProd]= useState({})
//  const param = useParams()
//  console.log(param)
const {id}= useParams()
console.log(id, 'id')
 //si hago una funcion a parte
 useEffect(()=>{
    traerUnProducto(id)
    .then((res)=> setDetalleProd(res))
    .catch((error)=> console.log(error))
 },[id])

 //reutilizando la funcion de ItemListContainer
//  useEffect(()=>{
//     getProducts()
//     .then((res)=> setDetalle(res.find((item)=> item.id === id)))
//     .catch((error)=> console.log(error))
//  },[id])

  return (
    <ItemDetail detalle={detalleProd}/>
  )
}

export default ItemDetailContainer