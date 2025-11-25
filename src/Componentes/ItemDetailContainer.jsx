

import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerUnProducto, traerProductos } from '../mock/Asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [detalleProd, setDetalleProd] = useState({})
  const { id } = useParams()

  useEffect(() => {
    traerUnProducto(id)
      .then((res) => setDetalleProd(res))
      .catch((error) => setError("No pudimos cargar el producto. Intente nuevamente."))
  }, [id])


  return (
    <ItemDetail detalle={detalleProd} />
  )
}

export default ItemDetailContainer