import React from 'react';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Navigation from '../components/Navigation/index';
import Cart from '../components/cart'
import PrincipalHome from '../components/principalHome'
import { CartContext } from '../utils/context'
import Loggin from '../components/login'

const Home = () => {
  const [cart, setCart] = useState([{}])
  const [isCart, setIsCart] = useState(false)
  const [isHome, setIsHome] = useState(true)
  const [isLoggin, setLoggin] = useState(false)
  const addToCart = (product) => {
    setCart((oldCart) => [...oldCart, product])
  }

  const tabs = [
    {
      id: 'cart',
      component: <Cart />,
      shouldRender: isCart
    },
    {
      id: 'home',
      component: <PrincipalHome />,
      shouldRender: isHome
    },
    {
      id: 'loggin',
      component: <Loggin />,
      shouldRender: isLoggin
    }
  ]

  useEffect(()=>{
    console.log(isCart,isHome, isLoggin)
  },[isCart,isHome,isLoggin])

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, addToCart, setIsCart, setIsHome, setLoggin }}>
        <Navigation />
        {tabs.filter((tab) => tab.shouldRender).map((tab) => (
          tab.id,
          tab.component
        ))}
      </CartContext.Provider>

    </>
  )
}

export default Home;