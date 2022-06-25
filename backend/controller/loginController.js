

const Login = require("../model/loginSchema");
const ErrorResponse = require('../util/errorResponse');

exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Please provide both email and password"), 400);
    } else if (password.length < 6) {
        return next(new ErrorResponse("Your password has to be at least 6 characters"), 400);
    } 

    try {
        const login = await Login.create({
            email, password
        })
        
        res.status(201).json({
            success: true,
            message: "user created"
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}