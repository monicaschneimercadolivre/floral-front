import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import Slick from 'react-slick';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Button } from 'react-bootstrap';
import { Modal, message } from 'antd';
import api from "../../services/api"
import CartContext from '../../utils/context';
const PropTypes = require('prop-types');


const Products = ({ isHome }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(null)
    const [id, setId] = useState('')
    const slider = useRef(null);
    const [flor, setFlor] = useState({})
    const [products, setProducts] = useState([])
    const [image, setImage] = useState({})
    const [imageURL, setImageURL] = useState("")
    const [onCart, setOnCart] = useState(false)
    const { ...context } = CartContext.useCartContext()
    const { addToCart, cart } = context
    const baseURL = 'http:localhost:3300'

    const settings = {
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 6,
        slidesToShow: 2
    };

    const getProducts = async () => {
        try {
            const data = await api.get("/products")
            setProducts(data.data)

        } catch (e) {
            console.log(e)
            setProducts([])
        }
    }

    // const getImage = async (imageId) => {
    //     try {
    //         const data = await api.get(`/image/${imageId}`)
    //         setImage(data.data)
    //         const imgUrl = URL.createObjectURL(data.data)
    //         setImageURL(imgUrl)
    //     } catch (e) {
    //         console.log(e)
    //         setImage({})
    //     }
    // }

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
        setOnCart(true)
        
    }

    const openProduct = (flag, flower) => {
        if (flag) {
            setOpen(true)
            setText(flower.description)
            setTitle(flower.name)
            setPrice(flower.price)
            setId(flower._id)
        } else return null
    }

    useEffect(() => {
        if (isHome) {
            getProducts();
        }
        if(onCart){
            addToCart(flor)
        }
    }, [onCart, isHome])

    return (
        <>
            <div className='text-center text-color m-5'>
                <h2>Our Top Products</h2>
                <p>Lorem ipsun dolor sit amet</p>
            </div>
            <Slick ref={slider} {...settings} >
                {products && products.map((flower) => (
                    <Col className='shadow p-3 mb-5 bg-body rounded d-flex flex-column width ' xs={12} lg={3} key={flower._id} >
                        <div>
                            <Image width='300rem' height='300rem' src={`${baseURL}/uploads/${flower.image}`}/>
                            <FontAwesomeIcon className='heart' icon={faHeart} />
                            <h2 className='width'>{flower.name}</h2>
                            <p id='text'>{flower.description}</p>

                        </div>
                        <div className='carousel__button'>
                            <Button
                                onClick={() => openProduct(true, flower)}
                                className='carousel__button-btn'>
                                Read More
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
                okText={'Adicionar ao carrinho'}
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
}

export default Products
