
// import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
//   const onAdd=(cantidad)=>{
//     console.log(`Agregaste ${cantidad} unidades del producto ${detalle.name}`)
//   }
  return (
    <div>
        <h2>Detalle del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>${detalle.price},00</p>
        <p>{detalle.description}</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
        {/* el contador opcional para la segunda pre entrega */}
        {/* <ItemCount stock={detalleProd.stock} onAdd={onAdd}/>  */}
    </div>
  )
}

export default ItemDetail
