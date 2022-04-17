import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner1.jpg'
import banner2 from '../../../image/banner2.jpg'
import banner3 from '../../../image/banner3.jpg'
import './Banner.css'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='Name'>Online Doctor Sevices</h1>
                    <p className='data'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.  The paragraph has no controlling idea. Imagine each paragraph as having three general layers of text. The core content is in the middle. It includes all the evidence you need to make the point. However, this evidence needs to be introduced by a topic sentence in some way or your readers don't know what to do with all the evidence you have given them. Therefore, the beginning of the paragraph explains the controlling idea of the paragraph. The last part of the paragraph tells the reader how the paragraph relates to the broader argument and often provides a transition to the next idea. Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really should not be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; what's important is that it is there to inform readers what the main idea of the paragraph is and how it relates back to the broader thesis of your paper.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;