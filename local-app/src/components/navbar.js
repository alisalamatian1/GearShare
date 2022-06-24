import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id='navbar'>
            <h1>This is Navbar</h1>
            <Link to='/'>
                <button>
                    {/* event handler to decide if login or
                            sign up*/}
                    LOGO
                </button>
            </Link>
            <Link to='/loginsignup'>
                <button>
                    {/* event handler to decide if login or
                            sign up*/}
                    Log in or Sign Up
                </button>
            </Link>
            <Link to='/rent'>
                <button>
                    Rent
                </button>
            </Link>
            <Link to='/post'>
                <button>
                    Post
                </button>
            </Link>
        </div>
    );
}
