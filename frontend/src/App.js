import Post from './Routes/Post';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path= "/Post" element = {<Post />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;