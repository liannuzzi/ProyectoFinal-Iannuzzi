import React from 'react';
import logo from '../../images/logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/styles.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function NavBar() {


    const {cartList,totalCartItems}=useCartContext();

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
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className='default-home-link'>
                        <NavDropdown.Item> <Link to={'category/Pizzas'} className='default-link' > Pizzas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'category/Bebidas'} className='default-link'>Bebidas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/category/Postres'} className='default-link'>Postres</Link></NavDropdown.Item>
                        </NavDropdown>
                        {cartList.length!==0?
                        <Nav.Link><Link to={'/cart'} className='default-home-link'>
                            <div className='cartIcon-container'>
                                <CartWidget/>
                                <span>{totalCartItems()}</span>
                            </div>
                        </Link></Nav.Link>:
                        ''}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}

export default NavBar;