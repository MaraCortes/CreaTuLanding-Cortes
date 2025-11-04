

import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav className="clase-navbar">
            <a className="a-navbar" href=""><img className="imagen-logo-tienda" src="../logo-tienda.jpg" alt="Logo-tienda" /></a>
            <a className="a-navbar" href="">Home</a>              
            <a className="a-navbar" href="">Nosotros</a>
            <a className="a-navbar" href="">Productos</a>
            <a className="a-navbar" href="">Destacados</a>
          <CartWidget/>
       
        </nav>
    )
}

export default Navbar
