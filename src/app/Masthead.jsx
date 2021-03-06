import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

// general styles
import 'style-loader!css-loader!react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.css';

import hostel from '../assets/images/hostel-inner_1200x600.jpg';
import city from '../assets/images/madrid-cityscape_1200x600.jpg';

const masthead = () => {
    return (
        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
            <div>
                <img src={hostel} />
            </div>
            <div>
                <img src={city} />
            </div>
        </Carousel>
    )
}

export default masthead;