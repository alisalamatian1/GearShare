import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/GearShare.png'
import '../styles/navbar.css';

export default function Navbar(props) {
    return (
        <nav id="navbar">
            <img src={icon} alt="Logo"/>                
            <ul>
                <Link to="/">Browse</Link>
                <Link to="/">About</Link> 
                <Link to="/">Reviews</Link>
                <Link to="/">Sign Up</Link>                
            </ul>
            <ul>
                <Link to="/" className="nav-login">Login</Link>
            </ul>
        </nav>
    );
}
