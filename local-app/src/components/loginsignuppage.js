import React from 'react';
import Navbar from './navbar';

export default class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='loginsignup-page'>
                <Navbar />
                <h1>This is LoginSignUp page</h1>
            </div>
        );
    }
}
