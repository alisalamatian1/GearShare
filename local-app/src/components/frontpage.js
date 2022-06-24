import React from 'react';
import Navbar from './navbar';
import Landing from './landing';
import About from './about';
import Testimonies from './testimonies';
import SignUp from './signup';
import Copyright from './copyright';

export default function FrontPage(props) {
    return (
        <div id='front-page'>
            <Navbar />
            <Landing />
            <About />
            <Testimonies />
            <SignUp />
            <Copyright />
        </div>
    );
}
