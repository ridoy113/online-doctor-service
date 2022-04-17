import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='full-login'>
            <Form onSubmit={handleRegister}>
                <div>
                    <div className='login-text'>
                        <h2>Please Register</h2>
                    </div>
                    <div className='login-form'>
                        <input className='input-' type="text" name='name' placeholder='Your Name' required />
                        <br />
                        <input className='input-' type="email" name='email' placeholder='Email Address' required />
                        <br />
                        <input className='input-' type="password" name='password' placeholder='Password' required />
                        <br />
                        <button className='log-btn' type="submit">Register</button>
                    </div>
                </div>
            </Form>
            <p className='new'>Already Have An Account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;