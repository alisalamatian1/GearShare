import React from 'react';
import aboutImg from '../img/about.png';

export default function About(props) {
    return (
        <div id='about' className='section'>
            <div id='about-left'>
                <h2 className='main-text'>Who we are</h2>
                <img src={aboutImg} className='img' id='about-img' />
            </div>
            <div id='about-right'>
                <h4 className='main-text' id='about-quote'>
                    "All we wanted to do was get outside."
                </h4>
                <p className='main-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed                    do eiusmod tempor incididunt ut labore et dolore magna aliqu                    a. Ut enim ad minim veniam, quis nostrud exercitation ullaml                    co laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}
