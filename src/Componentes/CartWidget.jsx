const CartWidget = ({ counter }) => {
    return (
        <div>
            <img className="img-carrito" src="../carrito.png" alt="logo-carrito" />
            <span style={{ color: 'red' }}>{counter}</span>
        </div>
    )
}

export default CartWidget






