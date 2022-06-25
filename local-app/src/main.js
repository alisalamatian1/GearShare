import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import LoginSignupPage from './components/loginsignuppage';
import RentPage from './components/rentpage.js';
import PostPage from './components/postpage.js';
import SignupPage from './components/signuppage.js';
import LoginPage from './components/loginpage.js';
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
            exact path='/signup' 
            element={<SignupPage/>}>
            </Route>
            <Route 
            exact path='/login'
            element={<LoginPage/>}>
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
