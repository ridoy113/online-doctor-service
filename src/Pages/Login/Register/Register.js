import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.perventDefault();
        const name = event.terget.name.value;
        const email = event.terget.email.value;
        const password = event.terget.password.value;
    }

    return (
        <div className='full-login'>
            <Form onSubmit={handleRegister}>
                <div>
                    <div className='login-text'>
                        <h2>Please Register</h2>
                    </div>
                    <div className='login-form'>
                        <input className='input-' type="text" placeholder='Your Name' required />
                        <br />
                        <input className='input-' type="email" placeholder='Email Address' required />
                        <br />
                        <input className='input-' type="password" placeholder='Password' required />
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