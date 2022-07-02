import React from 'react';
import signupImage from '../img/signup.png';

export default function SignUp(props) {
    return (
        <div id='signup' className='section'>
            <div
                id='signup-container'
                style={{
                    backgroundImage: `url(${signupImage})`
                }}>
                <div className='transparent-overlay'>
                    <h2 className='main-text'>Let's go exploring</h2>
                    <form id='sign-up'>
                        <label for='email'>
                            Email: <br />
                            <input id='email' />
                        </label>
                        <label for='password'>
                            Password: <br />
                            <input id='password' />
                        </label>
                        <div className='signup-buttons'>
                            <button className='sign-up-button'>
                                Sign up
                            </button>
                            <button className='sign-up-google'>
                                Sign up with Google
                            </button>
                        </div>
                        <p className='main-text'>Already a user? <span className='action'>Log in.</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}