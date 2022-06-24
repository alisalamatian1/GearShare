import React from 'react';
import landingImage from '../img/landing-image.png';


export default function Landing(props) {
    return (
        <div id='landing' className='section'>
            <h1 className='main-text'>Gearshare</h1>
            <div id='landing-container'>
                <img id='landing-image' src={landingImage} />
                <div id='landing-text'>
                    <h3 className='main-text'>The new <span className='text-green'>green
                    </span> way of sharing gear
                    </h3>
                    <p className='content-text main-text'>Make money. Improve 
                    the climate.</p>
                </div>
            </div>
        </div>
    );
}
