import React, {useState} from 'react';
import { send } from 'emailjs-com';
import {Form, Button} from 'react-bootstrap';
//import './index.scss';

const Formulario = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',

    });
    
    const onSubmit = (event) => {
        event.preventDefault();
        send(
            'service_esj9laj',
            'template_7hapgyl',
            toSend,
            '6yFYp2tp2go9Z8a9i'
        )
        .then((response) => {
            console.log('SUCCESS', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED', err);
        })
        console.log('você clicou')
    }

    const handleChange = (event) => {
        setToSend ({...toSend, [event.target.name]: [event.target.value]})
    }

    return(
        <>
        <div className='d-flex flex-column align-items-center'>
            <h2 className='formulario_title'>Subscribe to our newsletter</h2>
            <p className='formulario_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
       
        <Form className='w-50' onSubmit={onSubmit}>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="name" 
                name='from_name'
                placeholder="Your name" 
                value={toSend.from_name}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="email" 
                name='reply_to'
                placeholder="mail" 
                value={toSend.reply_to}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                rows={3}
                type="text"
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
                />
            </Form.Group>
            <div className='d-flex justify-content-center'>

                <Button 
                    className='formulario_button'
                    type='submit'
                >
                    Send Message
                </Button>
            </div>
            
        </Form>
        </div>
      
        </>
    );
};

export default Formulario;