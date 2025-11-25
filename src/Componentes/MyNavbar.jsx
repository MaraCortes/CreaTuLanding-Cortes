
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="clase-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img className='imagen-logo-tienda'  src="../logo-tienda.jpg" alt="Logo-tienda"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
           
            <NavDropdown title="Productos" id="basic-nav-dropdown">
               <NavDropdown.Item as={NavLink} to='/category/tortas'>Tortas</NavDropdown.Item>              
              <NavDropdown.Item as={NavLink} to='/category/postres'>Postres</NavDropdown.Item> 
              <NavDropdown.Item as={NavLink} to='/category/tartas'>Tartas</NavDropdown.Item>           
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>      
    </Navbar>    
  );
}

export default MyNavbar
