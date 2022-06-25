import React from 'react';
import Navbar from './navbar';

export default class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        const titleCaption = this.props.titleCaption;
        const message = this.props.message;
        const messageFirst = this.props.messageFirst;
        const messageLast = this.props.messageLast;
        const action = this.props.action;
        return (
            <div id='loginsignup-page' className='section'>
                <Navbar />
                <h2 className='main-text'>{title}</h2>
                <p className='main-text'>{titleCaption}</p>
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
                                {`${action}`}
                            </button>
                            <button className='sign-up-google'>
                                {`${action} with Google`}
                            </button>
                        </div>
                        <p className='main-text'>
                            {messageFirst} <span className='action'>{messageLast}</span>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
