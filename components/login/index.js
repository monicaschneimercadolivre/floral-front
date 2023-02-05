
import react, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import CartContext from '../../utils/context';
import Cart from '../cart'
import api from "../../services/api"
import { message } from 'antd';

const Login = () => {
    const { ...context } = CartContext.useCartContext()
    const {isLogged} = context

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    const [setToken] = useState("")

    const verifyEmail = () => {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (!emailRegex.test(email)) {
            setEmailError(true)
        } else if (email === nul) {
            setEmailError(false)
        }
    }
    const verifyPassword = () => {
        const passwordRegex = /^[0-9a-zA-Z$*&@#]{8,}$/i
        if (!passwordRegex.test(password)) {
            setPasswordError(true)
        } else if (passwordRegex.test(password)) {
            setPasswordError(false)
        }
    }

    const searchUser = ()=>{
        verifyEmail();
        verifyPassword();
        api.post('/login', {
            email:email,
            password:password
        }).then((response)=>{
            try {
                setToken(response.data)
            } catch (error) {
              `${error.message}`  
            }
        })
    }
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                {/* {isLogged ? <Cart /> : */}
                    <>
                        <h2 className='formulario_title'>Login Page</h2>
                        <p className='formulario_paragraph'>Please add your login and password </p>
                        <Form className='w-50' >
                            <Form.Group className="mb-3" controlId="example">
                                <Form.Label >Email</Form.Label>
                                {emailError ? <>
                                    <Form.Control
                                        isInvalid
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Invalid Email
                                    </Form.Text>
                                </> : <Form.Control
                                    type="email"
                                    value={email} onChange={(e) => setEmail(e.currentTarget.value)}
                                    placeholder="name@example.com"

                                />}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="121313">
                                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                {passwordError ?
                                    <>
                                        <Form.Control
                                            isInvalid
                                        />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Invalid Password
                                        </Form.Text>
                                    </> : <>
                                        <Form.Control
                                            type="password"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            value={password} onChange={(e) => setPassword(e.currentTarget.value)}
                                            placeholder="password"

                                        />
                                        <Form.Text id="passwordHelpBlock" muted>
                                            Your password must be 8-20 characters long.
                                        </Form.Text>
                                    </>}

                            </Form.Group>

                            <div className='d-flex justify-content-center'>
                                <Button
                                    className='formulario_button'
                                    onClick={searchUser}
                                >
                                    Send
                                </Button>
                            </div>
                        </Form>

                    </>
                {/* } */}
            </div>
        </>
    )
}


export default Login;