import React from 'react';
import Navbar from './navbar';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='loginsignup-page' className='section'>
                <Navbar />
                <h2 className='main-text'>Log in</h2>
                <p className='main-text'>Welcome back! We missed you</p>
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
                                Log in
                            </button>
                            <button className='sign-up-google'>
                                Log in with Google`}
                            </button>
                        </div>
                        <p className='main-text'>
                            Not a member? <span className='action'>Register now.</span>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
