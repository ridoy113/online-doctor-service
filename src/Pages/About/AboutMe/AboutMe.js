import React from 'react';
import './AboutMe.css'
import mypic from '../../../image/mypic.png'

const AboutMe = () => {
    return (
        <div className='about-me'>
            <img src={mypic} alt="" />
            <h2 className='name-text'>Al Mamun Ridoy</h2>
            <p className='text'>I become an expert in a Technology, Javascript, React at last get to a specific job title.</p>
        </div>
    );
};

export default AboutMe;