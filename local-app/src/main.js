import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import RentPage from './components/rentpage';
import PostPage from './components/postpage';
import SignupPage from './components/signuppage';
import LoginPage from './components/loginpage';

// shows pages according to current URL

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            user: {
                email: 'john@yahoo.ca'
            },
            isSuccessful: false,
        }

        this.handlePost = this.handlePost.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    render() {
        return (
        <Routes> {/* decides which component to
            show based on current URL*/}
        <Route exact path='/' element={<Frontpage 
        isSuccessful={this.state.isSuccessful}
                />}></Route>
            <Route 
            exact path='/signup' 
            element={<SignupPage
            isSuccessful={this.state.isSuccessful}
        />}>
            </Route>
            <Route 
            exact path='/login'
            element={<LoginPage
            handleSuccess={this.handleSuccess}
            isSuccessful={this.state.isSuccessful}
        />}>
            </Route>
            <Route 
            exact path='/rent' 
            element={<RentPage
            isSuccessful={this.state.isSuccessful}
            />}>
            </Route>
            <Route 
            exact path='/post' 
            element={<PostPage 
            isSuccessful={this.state.isSuccessful}
        />}> 
            </Route>
        </Routes>
        );
    }

    handlePost(item) {
        this.setState({items: this.state.items.concat([item])})
    }

    handleSuccess(isSuccessful) {
        this.setState({isSuccessful: isSuccessful});
    }
}

export default Main;
