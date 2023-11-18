import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { UserContext } from '../context/user.context';


const CustomNavbar = () => {
  const userContext = useContext(UserContext);

  const doLogout = ()=>{
    userContext.setIsLogin(false);
    userContext.setUserData(null);
  }
 
  return (
    <Navbar collapseOnSelect className='bg-navbar-color' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} width={50} height={50}></img>
          Electronic Store
        </Navbar.Brand>

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

            {
              (userContext.isLogin) ?
                (
                  <>

                    <Nav.Link as={NavLink} to="#">{userContext.userData.user.email}</Nav.Link>
                    <Nav.Link onClick={doLogout}>Logout</Nav.Link>
                  </>
                ) :
                (
                  <>
                    <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                  </>
                )
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;