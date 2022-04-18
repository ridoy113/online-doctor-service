import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
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

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
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
                        <button className='log-btn' type="submit">Log In</button>
                    </div>
                </div>
            </Form>
            {errorElement}
            <p className='new mt-4'>New To This Site? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            <p className='new'>Forget Password? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;