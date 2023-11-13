import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const CustomNavbar = ()=>{
    return(
        <Navbar collapseOnSelect className='bg-navbar-color' expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Electronic Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={NavLink} to="service">Features</Nav.Link>
              
              <NavDropdown title="Caregories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Laptop
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                 Mores
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="about">About</Nav.Link>
              <Nav.Link as={NavLink} to="contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={NavLink} to="cart">Cart(20)</Nav.Link>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link href="#deets">Logout</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNavbar;