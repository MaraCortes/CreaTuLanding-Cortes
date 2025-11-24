

//import CartWidget from "./CartWidget"

// const Navbar = () => {
//     return (
//         <nav className="clase-navbar">
//             <a className="a-navbar" href=""><img className="imagen-logo-tienda" src="../logo-tienda.jpg" alt="Logo-tienda" /></a>
//             <a className="a-navbar" href="">Home</a>              
//             <a className="a-navbar" href="">Nosotros</a>
//             <a className="a-navbar" href="">Productos</a>
//             <a className="a-navbar" href="">Destacados</a>
//           <CartWidget/>
       
//         </nav>

        
    
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="clase-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img className="imagen-logo-tienda" src="../logo-tienda.jpg" alt="Logo-tienda"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>

    
  );
}

export default MyNavbar
