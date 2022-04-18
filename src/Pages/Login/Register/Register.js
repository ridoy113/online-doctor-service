import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        if (agree) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate('/home')
        }
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

                        <input onClick={() => setAgree(!agree)} className='mt-2' type="checkbox" name="terms" id="terms" />

                        <label className={agree ? ' ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms">Accept Terms and Condition</label>

                        <br />
                        <button
                            className='log-btn'
                            type="submit">
                            Register</button>
                    </div>
                </div>
            </Form>
            <p className='new'>Already Have An Account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;