import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, discription, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='picture' src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{discription}</small></p>
            <h4>Price: {price}</h4>
            <button onClick={() => navigateToServiceDetail(id)} className='more-btn pe-auto'>Check Out</button>
        </div>
    );
};

export default Service;