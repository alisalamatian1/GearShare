import React from 'react';
import signupImage from '../img/signup.png';

export default function SignUp(props) {
    return (
        <div id='signup' className='section'>
            <div 
            id='signup-container'
            style={{
                backgroundImage: `url(${signupImage})`
            }}
            >
                <h2 className='main-text'>Let's go exploring</h2>
                <form id='sign-up'>
                    <label for='email'>
                    </label>
                    <label for='password'>
                    </label>
                    <button className='sign-up-button'>
                        Sign up 
                    </button>
                    <button className='sign-up-google'>
                        Sign up with Google
                    </button>
                </form>
            </div>
        </div>
    );
}
