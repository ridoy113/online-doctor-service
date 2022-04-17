import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, discription, price } = service;
    return (
        <div className='service'>
            <img className='picture' src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{discription}</small></p>
            <h4>Price: {price}</h4>
            <button className='more-btn'>READ MORE</button>
        </div>
    );
};

export default Service;