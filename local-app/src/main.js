import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import LoginSignupPage from './components/loginsignuppage';
import RentPage from './components/rentpage.js';
import PostPage from './components/postpage.js';

// shows pages according to current URL

function Main () {
    return (
        <Routes> {/* decides which component to
            show based on current URL*/}
        <Route exact path='/' element={<Frontpage />}></Route>
            <Route 
            exact path='/loginsignup' 
            element={<LoginSignupPage />}>
            </Route>
            <Route 
            exact path='/rent' 
            element={<RentPage />}>
            </Route>
            <Route 
            exact path='/post' 
            element={<PostPage />}>
            </Route>
        </Routes>
    );
}

export default Main;
