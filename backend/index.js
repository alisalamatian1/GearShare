require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const path = require('path')


// Connect database
connectDB();

const app = express();

app.use(express.json());

//Routing
app.use(express.static(path.join(__dirname,'build')))
app.get("/", (req, res)=>{
    
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.use('/api/', require('./routing/gear'));
app.use('/ls/', require('./routing/login'))


const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'))
}

const server = app.listen(port, () => console.log(`Server running on port ${port}`));