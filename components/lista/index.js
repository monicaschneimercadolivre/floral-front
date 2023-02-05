import React, { useEffect} from 'react';
import { Row,Col} from 'react-bootstrap';
import CountUp from 'react-countup';

//import './index.scss';


const Lista =({posts}) =>{


    useEffect(() => {
        const interval = setInterval(() => {
        const numberColletion = document.querySelectorAll('.list__item');
        numberColletion.forEach((number) => {
            const currentNumber = parseInt(number.innerHTML);
            number.innerHTML = currentNumber+1
        })
        }
        , 1000);
        
    }
    );
    
    
    return (
        <>

        <Row className='Lista w-100 m-0 d-flex align-items-center text-center' lg={4} xs={1}>
            
                {posts&&posts.map(({id, start, end, delay, text})=> (
                    <Col key={id}>
                   
                    <CountUp 
                    
                    start={start} 
                    end={end} 
                    delay={delay} 
                    className='list__item'>     
                    </CountUp>
                    <span className='d-block list__span'>{text}</span>   
                    </Col>  
                ))}
                
           
            {/* <Col>
                <CountUp 
                    start={0} 
                    end={5000} 
                    delay={0} 
                    className='list__item'>     
                </CountUp>
                <span className='d-block list__span'>
                    Boupackages sold
                </span>
            </Col>
            <Col>
                <CountUp 
                    start={0} 
                    end={7000} 
                    delay={0} 
                    className='list__item'>     
                </CountUp>
                <span className='d-block list__span'>
                    Happy clients
                
                </span>
            </Col>
            <Col>
                <CountUp 
                    start={0} 
                    end={10} 
                    delay={0} 
                    className='list__item'>     
                </CountUp>
                <span className='d-block list__span'>
                    Years of experience
                </span>
            </Col> */}
        </Row>
        </>
        
      
    )
}

export default Lista;