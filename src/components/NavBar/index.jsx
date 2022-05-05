import React from 'react';
import logo from '../../images/logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/styles.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return ( 
        <div>
            <Navbar bg='dark' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand>
                    <Link to={'/'}>
                    <img
                        alt=""
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        />
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link to={'/'} className='default-home-link'>Inicio</Link></Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item> <Link to={'category/Pizzas'} className='default-link' > Pizzas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'category/Bebidas'} className='default-link'>Bebidas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/category/Postres'} className='default-link'>Postres</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<div style={{display: "inline-block"}}><CartWidget/></div>}>
                        <NavDropdown.Item>Sin items en el carrito</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}

export default NavBar;