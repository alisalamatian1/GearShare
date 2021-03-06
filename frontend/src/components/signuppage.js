import React from 'react';
import Navbar from './navbar';
import Copyright from './copyright';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.state.email
        // this.state.password
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }
        axios.post("/ls/signUp", {email: this.state.email, password: this.state.password}, config).then(
            res => {
                alert(`${res.data.message}`);
            }
        ).catch(
           
            err => {
                alert(err.message);
            }
        )
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div id='loginsignup-page' className='section'>
                <Navbar 
                isSuccessful={this.props.isSuccessful}
            />
                <h2 className='main-text'>Sign Up</h2>
                <p className='main-text'>One account. All the world's gear.</p>
                <div id='form-container'>
                    <form id='loginsignup-form' onSubmit={this.handleSubmit}>
                        <label for='email'>
                            Email: <br />
                            <input id='email' autocomplete="off" value={this.state.email} onChange={this.handleEmailChange}/>
                        </label>
                        <label for='password'>
                            Password: <br />
                            <input id='password' autocomplete="off" value={this.state.password} onChange={this.handlePasswordChange}/>
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
                            Already a user? <span className='action'>
                                <Link to='/login'>Log in.
                                </Link>
                            </span>
                        </p>
                    </form>
                </div>
                <Copyright />
            </div>
        );
    }
}
