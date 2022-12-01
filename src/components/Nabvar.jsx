import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import CartSidebar from './CartSidebar';

const Nabvar = () => {
  const [show, setShow] = useState(false);
  const token=localStorage.getItem("token")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useNavigate();

  const toLogin=()=>{
     return  navigate("/login")
  }


  return (

    <>
    <div className='nabvar'>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> Ecomerse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/misCompras">my compras</Nav.Link>
            <Nav.Link   onClick={handleShow}>carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    {  token ? <CartSidebar  show={show} handleClose={handleClose}/> :  toLogin()  } 
    </>
  );
};

export default Nabvar;