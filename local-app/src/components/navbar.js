import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/GearShare.png'
import '../styles/navbar.css';

export default function Navbar(props) {
    if (props.isSuccessful) {
        return (
            <nav id="navbar">
                <img src={icon} alt="Logo"/>                
                <ul>
                    <Link to="/">Browse</Link>
                    <Link to="/">About</Link> 
                    <Link to="/">Reviews</Link>
                    <Link to="/signup">Sign Up</Link>                
                    <Link to='/rent'>Rent</Link>
                    <Link to='/post'>Post</Link>
                </ul>
                <ul>
                    <Link to="/login" className="nav-login">
                        Login
                    </Link>
                </ul>
            </nav>

        )
    } else {
        return (
            <nav id="navbar">
                <img src={icon} alt="Logo"/>                
                <ul>
                    <Link to="/">Browse</Link>
                    <Link to="/">About</Link> 
                    <Link to="/">Reviews</Link>
                    <Link to="/signup">Sign Up</Link>                
                </ul>
                <ul>
                    <Link to="/login" className="nav-login">
                        Login
                    </Link>
                </ul>
            </nav>
        )
    }
}
