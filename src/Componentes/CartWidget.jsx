import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    const counter = cart.reduce((acc, item) => acc + item.cantidad, 0)
    
    return (
        <Link to="/cart" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img className="img-carrito" src="../carrito.png" alt="logo-carrito" />
            {counter > 0 && <span style={{ color: 'red' }}>{counter}</span>}
        </Link>
    )
}

export default CartWidget






