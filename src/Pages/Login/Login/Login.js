import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }


    return (
        <div className='full-login'>
            <Form onSubmit={handleSubmit}>
                <div >
                    <div className='login-text'>
                        <h2>Please LogIn</h2>
                    </div>
                    <div className='login-form'>
                        <input ref={emailRef} className='input-' type="email" name="email" id="" placeholder='Enter your email' required />
                        <br />
                        <input ref={passwordRef} className='input-' type="password" name="password" id="" placeholder='Enter your currect password' required />
                        <br />
                        <button className='log-btn' type="submit">Submit</button>
                    </div>
                </div>
            </Form>
            <p className='new'>New To This Site? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;