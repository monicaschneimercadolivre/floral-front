import React from 'react';
import Image from "next/image";
import {Button, Col, Row} from 'react-bootstrap';
import moça from '../../img/moça-flores.jpg';
import ramo1 from '../../img/ramos1.png';
import ramo2 from '../../img/ramos2.png';
//import './index.scss';
export const Hero = () =>{
    return (
        <>
            <Row lg='12' className='m-0 row-size'>
                <Col lg='6' xs='12' className='text-center align-self-center col__text'>
                    <Image
                        src={ramo2}
                        className='ramo2'
                    />
                    <h3>Flower <span className='d-block'>Arrangements</span></h3>
                    <h4>For all special ocasions</h4>
                    <p>lorem ipsum</p>
                    <Row>
                        <Col className='shop'>
                            <div></div>
                            <Button className='shop__btn'>Shop</Button>
                        </Col>
                        <Col className='readMore'>
                            <h5 className='m-0'>Read more</h5>
                        </Col>
                    </Row>
                    <Image
                        src={ramo1}
                        className='ramo1'
                    />
                </Col>
                <Col lg='6'xs='12'className='p-0'>
                    <Image 
                        src={moça}
                        className='img-size'
                    />
                </Col>
            </Row>
     
        </>
    )
};

export default Hero;
