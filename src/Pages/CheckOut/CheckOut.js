import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkId } = useParams();
    return (
        <div>
            <h1>This is Check Out:{checkId}</h1>
            <div className='text-center'>
                <Link to='/sequre'>
                    <button className='btn btn-danger'>Click For Secret Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;