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
                    Living here on the West Coast of BC, there is just too many opportunities to get out and go exploring. But, outdoor gear is expensive and manufacturing and shipping plastic across the Pacific Ocean only polluted the outdoors we loved so much. So, we made Gearshare - a place where we can share each others' gear, get outside more, and help the environment. We are a family business going 27 years strong, and we welcome you to join us. We can't wait to meet you.
                </p>
            </div>
        </div>
    );
}
