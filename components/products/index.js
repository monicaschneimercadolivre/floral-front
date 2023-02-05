import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import Slick from 'react-slick';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Button } from 'react-bootstrap';
import { Modal, message } from 'antd';
import {PostProducts} from '../../data/PostProducts'
import CartContext from '../../utils/context';
const PropTypes = require('prop-types');


const Products = ({ posts }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState(null)
    const [title, setTitle] = useState(null)
    const [price, setPrice] = useState(null)
    const [id, setId] = useState(null)
    const slider = useRef(null);
    const [flor, setFlor] = useState({})
    const { ...context } = CartContext.useCartContext()
    const { addToCart, cart } = context

    const settings = {
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 6,
        slidesToShow: 2
    };

    const putOnCart = () => {
        setTimeout(() => {
            message.success({
                content: 'Flor adicionada ao carrinho com sucesso!',
                duration: 2
            })
        }, 500)
  
        setFlor({
            id: id,
            title: title,
            price: price
        })
        addToCart(flor)
   
    }

    const openProduct = (title, text, flag, id, price) => {
        if (flag) {
            setOpen(true)
            setText(text)
            setTitle(title)
            setPrice(price)
            setId(id)
        } else return null
    }
    
    return (
        <>
            <div className='text-center text-color m-5'>
                <h2>Our Top Products</h2>
                <p>Lorem ipsun dolor sit amet</p>
            </div>
            <Slick ref={slider} {...settings} >
                {posts.map(({ id, title, image, text, action, price }) => (
                    <Col className='shadow p-3 mb-5 bg-body rounded d-flex flex-column width ' xs={12} lg={3} key={id} >
                        <div>
                            <Image src={image} />
                            <FontAwesomeIcon className='heart' icon={faHeart} />
                            <h2 className='width'>{title}</h2>
                            <p id='text'>{text}</p>

                        </div>
                        <div className='carousel__button'>
                            <Button
                                onClick={() => openProduct(title, text, true, id, price)}
                                className='carousel__button-btn'>
                                {action}
                            </Button>
                        </div>
                    </Col>
                ))}
            </Slick>
            <div className='d-flex justify-content-center button'>
                <button className='btn' onClick={() => slider?.current?.slickPrev()}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                    />
                </button>
                <button className='btn' onClick={() => slider?.current?.slickNext()}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                    />
                </button>
            </div>
            <Modal
                title={title}
                centered
                open={open}
                onOk={() => putOnCart()}
                okText={' Adicionar ao carrinho'}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <p>{text}</p>
                <p>{`Preço unitário: R$ ${price}`} </p>

            </Modal>

        </>
    );
}

Products.prototypes = {
    addToCart: PropTypes.func.isRequired,
    Cart: PropTypes.shape([{}]),
  }
export default Products
