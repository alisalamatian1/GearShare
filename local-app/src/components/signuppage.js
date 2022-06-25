import React from 'react';
import Navbar from './navbar';

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='loginsignup-page' className='section'>
                <Navbar />
                <h2 className='main-text'>Sign Up</h2>
                <p className='main-text'>One account. All the world's gear.</p>
                <div id='form-container'>
                    <form id='loginsignup-form'>
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
                        <p className='main-text'>
                            Already a user? <span className='action'>Log in.</span>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
