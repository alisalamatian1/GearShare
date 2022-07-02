import React from 'react';
import Navbar from './components/navbar';
import Main from './main';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='app'>
                <Main/>
            </div>
        );
    }
}