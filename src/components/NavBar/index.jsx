import React from 'react';
import logo from 'C:/Users/Lucas/Documents/CURSOS/CODER HOUSE/REACT/Desafios/Desafio 1/my-app/src/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/styles.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget';

function NavBar() {
    return ( 
        <div>
            <Navbar bg='dark' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<div style={{display: "inline-block"}}><CartWidget></CartWidget></div>}>
                        <NavDropdown.Item href="#action/3.1">Sin items en el carrito</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}

export default NavBar;