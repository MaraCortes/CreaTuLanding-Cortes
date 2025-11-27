
const ItemDetail = ({ detalle }) => {

  return (
    <div className="item-detail-container">
      <h2>Detalle del producto: {detalle.name}</h2>
      <img src={detalle.img} alt={detalle.name} />
      <p>${detalle.price},00</p>
      <p>{detalle.description}</p>
      <p>Stock disponible: {detalle.stock} unidades</p>
    </div>
  )
}

export default ItemDetail
