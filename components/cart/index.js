import React, { useCallback } from 'react';
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Table, Button, message } from 'antd';
import { Card } from 'antd';
import { useState, useEffect } from "react";
import CartContext from '../../utils/context';
import Loggin from '../login'
const PropTypes = require('prop-types');

const Cart = () => {
    const [subtotal, setSubTotal] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const { ...context } = CartContext.useCartContext()
    const { cart, isCart, userName } = context

    const key = 'updatable';

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Preço',
            dataIndex: 'preço',
            key: 'preço',
        }
    ];
    const openMessageCheckout = () => {
        message.loading({
            content: 'Loading...',
            key,
        })
        setTimeout(() => {
            message.success({
                content: 'Compra realizada com sucesso!',
                key,
                duration: 2
            })

        }, 1000)
    }

    const cartProducts =   async() => {
        const preco = await cart.slice(1)?.map(p => p.price)
        console.log(preco)
        setSubTotal(preco ? preco : 0)
    }

    useEffect(()=>{
        cartProducts()
        console.log(subtotal)
    }, [cart])

    return (
        <>
            <ShoppingCart>
                <ShoppingCartTtile>Olá {userName}! Vamos completar seu carrinho?</ShoppingCartTtile>
                <Row lg='12'>
                    <Col lg='6' xs='12'>
                        <Table
                            dataSource={cart?.map((c) => (
                                {
                                    key: c.id,
                                    name: c.title,
                                    preço: c.price
                                }
                            ))}
                            columns={columns}
                            bordered
                            pagination={{ position: ['none'] }}
                        />
                    </Col>
                    <Col lg='6' xs='12' style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            size='default'
                            title={`Total: R$ ${subtotal + delivery}`}
                            style={{ width: '50%' }}
                        >
                            <p>{`Subtotal: R$ ${subtotal}`} </p>
                            <p>{`Delivery: R$ ${delivery}`} </p>
                            <Button type="primary" onClick={openMessageCheckout}>
                                CHECKOUT
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </ShoppingCart>
        </>
    )
}

const ShoppingCartTtile = styled.h2`
    display: flex;
    justify-content: center;
    margin: 4rem;
`;

const ShoppingCart = styled.div`
    height: 100vh;
`;

Cart.prototypes = {
    Cart: PropTypes.shape([{}]),
}

module.exports = Cart