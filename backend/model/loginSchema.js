const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, "Please provide the email"]
    }, 
    password: {
        type: String,
        required: [true, "Please provide the password"]
    }
})

module.exports = mongoose.model("Login", LoginSchema);