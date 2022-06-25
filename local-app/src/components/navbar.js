import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/GearShare.png'

export default function Navbar(props) {
    return (
        <nav id="navbar">
            <img src={icon} alt="Logo"/>                
            <ul>
                <Link to="/">Browse</Link>
                <Link to="/">About</Link> 
                <Link to="/">Reviews</Link>
                <Link to="/">Sign Up</Link>                
                {/* TO EDIT */}
                <Link to="/loginsignup">Loginsignup</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/post">Post</Link>
            </ul>
            <ul>
                <Link to="/loginsignup" className="nav-login">Login</Link>
            </ul>
        </nav>
    );
}
