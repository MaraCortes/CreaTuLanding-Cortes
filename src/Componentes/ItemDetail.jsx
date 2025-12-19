import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
    const [purchase, setPurchase] = useState(false)
    const {addItem, itemCantidad} = useContext(CartContext)
    
    const onAdd = (cantidad) => {
        addItem(detalle, cantidad)
        setPurchase(true)
    }
    
    const stockActualizado = detalle.stock - itemCantidad(detalle.id)
    
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Detalle del producto: {detalle.name}</h2>
            <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
                <div className="flex-shrink-0">
                    <img 
                        src={detalle.img} 
                        alt={detalle.name}
                        style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '8px' }}
                        className="img-fluid"
                    />
                </div>
                <div className="flex-grow-1">
                    <h3 className="text-primary mb-3">${detalle.price},00</h3>
                    <p className="mb-3" style={{ fontSize: '1.1rem' }}>{detalle.description}</p>
                    <p className="mb-3">
                        <strong>Stock disponible:</strong> {stockActualizado} unidades
                    </p>
                    {
                        purchase 
                            ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> 
                            : <ItemCount stock={stockActualizado} onAdd={onAdd}/> 
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
