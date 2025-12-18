



// const ItemDetail = ({ detalle }) => {

//   return (
//     <div className="item-detail-container">
//       <h2>Detalle del producto: {detalle.name}</h2>
//       <img src={detalle.img} alt={detalle.name} />
//       <p>${detalle.price},00</p>
//       <p>{detalle.description}</p>
//       <p>Stock disponible: {detalle.stock} unidades</p>
//     </div>
//   )
// }

// export default ItemDetail


import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  const [purchase, setPurchase]= useState(false)
const {addItem, itemQuantity}=useContext(CartContext)
  const onAdd=(cantidad)=>{
   addItem(detalle, cantidad)
   setPurchase(true)
  }
  const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div>
        <h2>Detalle del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>${detalle.price},00</p>
        <p>{detalle.description}</p>
        <p>Stock disponible: {stockActualizado} unidades</p>
        {/* el contador opcional para la segunda pre entrega */}
       {
        purchase 
       ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> 
       : <ItemCount stock={stockActualizado} onAdd={onAdd}/> 
       }
    </div>
  )
}

export default ItemDetail