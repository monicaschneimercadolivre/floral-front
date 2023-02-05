import React from 'react';
import Image from "next/image";
import {Col, Row} from 'react-bootstrap';
import flores6 from '../../img/flores6.jpg';
//import './index.scss';



const Sale =() => {
    return(
        <>  
        <div>
            <Row className='sale pt-5 pb-5 row'>
                <Col lg={6} xs={12} className='text-center d-flex flex-column justify-content-center  background p-0 col1'>
                    <h4 className='borda'>Special Offer</h4>
                    <h2>20%</h2>
                    <h4 className='discount'>Discount on your first purchase</h4>
                </Col>
                <Col lg={6} xs={12} className='p-0 col2'>
                    <Image src={flores6} alt='Mulher segurando um buquet de flores'/>
                </Col>
            </Row>
        </div>
        </>

    )
};

export default Sale;