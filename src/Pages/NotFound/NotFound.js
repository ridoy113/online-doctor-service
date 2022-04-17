import React from 'react';
import notfound from '../../image/notfound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;