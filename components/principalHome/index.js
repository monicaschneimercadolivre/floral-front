import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Hero from '../hero';
import Lista from '../lista';
import Posts from '../../data/Posts';
import Products from '../products';
import PostProducts from '../../data/PostProducts';
import Movie from '../movie';
import Sale from '../sale';
import PostPrincipal from '../../data/PostPrincipal';
import Principal from '../principal';
import Formulario from '../formulario';

const Home = ({isHome}) => {

 return (
    <>
        <Hero />
        <Lista posts={Posts} />
        <Products
          isHome={isHome}
        />
        <Movie />
        <Sale />
        <Principal posts={PostPrincipal} />
        <Formulario />
    </>
  )
}

export default Home;