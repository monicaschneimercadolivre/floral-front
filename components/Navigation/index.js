import React from 'react';
import Image from "next/image";
import {useEffect} from  'react';
import Link, { LinkProps } from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../utils/context'
const PropTypes = require('prop-types');

const Navigation = () => {
  const { ...context } = CartContext.useCartContext()
  const { cart, setIsCart, setIsHome, setLoggin} = context

  return (
    <Navbar className='navbar__color' expand='lg'>
      <Container >
        <Navbar.Brand href="#home">
          <Image
            src={logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar__nav'>
          <Nav className='w-100 justify-content-around text-uppercase align-items-center nav'>
            <a className='nav__text ' onClick={()=>{setIsCart(false); setIsHome(true)}} >Home</a>
            <a className='nav__text' href="#link">Services</a>
            <a className='nav__text' href="#home">About</a>
            <a className='nav__text' href="#link">Contact</a>
            <Button
              className="text-uppercase btn"
              onClick={()=>{setLoggin(true); setIsHome(false)}}
            // onClick={handleCreateAcc}
            >
      
              Sign in
        
            </Button>
            <Button onClick={()=>{setIsCart(true); setIsHome(false)}}>
              <FontAwesomeIcon size="2x" icon={faShoppingCart} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

Navigation.prototypes = {
  Cart: PropTypes.shape([{}]),
  setIsCart: PropTypes.bool,
  setIsHome: PropTypes.bool,
  setLoggin: PropTypes.bool
}
export default Navigation;