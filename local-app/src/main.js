import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import LoginSignupPage from './components/loginsignuppage';
import RentPage from './components/rentpage.js';
import PostPage from './components/postpage.js';
import Post from './Post.js';

// shows pages according to current URL

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            user: {
                email: 'john@yahoo.ca'
            }
        }

        this.handlePost = this.handlePost.bind(this);
    }

    render() {
        return (
        <Routes> {/* decides which component to
            show based on current URL*/}
        <Route exact path='/' element={<Frontpage />}></Route>
            <Route 
            exact path='/loginsignup' 
            element={<LoginSignupPage 
                    title='Log in'
                    titleCaption='Welcome back! We missed you.'
                    action='Log in'
                    messageFirst='Not a user?'
                    messageLast='Register now.'
            />}>
            </Route>
            <Route 
            exact path='/rent' 
            element={<RentPage 
                    items={this.state.items}
            />}>
            </Route>
            <Route 
            exact path='/post' 
            element={<Post />}> 
            </Route>
        </Routes>
        );
    }

    handlePost(item) {
        this.setState({items: this.state.items.concat([item])})
    }
}

export default Main;
