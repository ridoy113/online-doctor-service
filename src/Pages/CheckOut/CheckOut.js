import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkId } = useParams();
    return (
        <div>
            <h1>This is Check Out:{checkId}</h1>
        </div>
    );
};

export default CheckOut;