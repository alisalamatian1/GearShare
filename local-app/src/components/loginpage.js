import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom'
import Copyright from './copyright';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }

    emailHandler(e) {
        this.setState({email: e.target.value});
    }

    passwordHandler(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit() {
        // this.state.email // this is e-mail
        // this.state.password // this is password 
    }

    render() {
        return (
            <div id='loginsignup-page' className='section'>
                <Navbar />
                <h2 className='main-text'>Log In</h2>
                <p className='main-text'>Welcome back! We missed you</p>
                <div id='form-container'>
                    <form id='loginsignup-form' onSubmit={this.handleSubmit}>
                        <label for='email'>
                            Email: <br />
                            <input id='email' value={this.state.email} onChange={this.emailHandler}/>
                        </label>
                        <label for='password'>
                            Password: <br />
                            <input id='password' value={this.state.password} onChange={this.passwordHandler}/>
                        </label>
                        <div className='signup-buttons'>
                            <button className='sign-up-button'>
                                Log in
                            </button>
                            <button className='sign-up-google'>
                                Log in with Google
                            </button>
                        </div>
                        <p className='main-text'>
                            Not a member? <span className='action'>
                                <Link to='/signup'>Register now.
                        </Link></span>
                        </p>
                    </form>
                </div>
                <Copyright />
            </div>
        );
    }
}
