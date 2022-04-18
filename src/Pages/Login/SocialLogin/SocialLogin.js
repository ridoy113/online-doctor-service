import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../image/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home')
    }



    return (
        <div className=''>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50' ></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-50' ></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    type="button" class="google_btn">
                    <img className='px-2' src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div >
    );
};

export default SocialLogin;