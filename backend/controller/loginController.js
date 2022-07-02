

const Login = require("../model/loginSchema");
const ErrorResponse = require('../util/errorResponse');

exports.signUp = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Please provide both email and password"), 400);
    } else if (password.length < 6) {
        return next(new ErrorResponse("Your password has to be at least 6 characters"), 400);
    } 

    try {
        const signUp = await Login.create({
            email, password
        })
        console.log("+++++++++++++++++++++++++++++++")
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

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return next(new ErrorResponse("Please provide both email and password"), 400);
    } else if (password.length < 6) {
        return next(new ErrorResponse("Your password has to be at least 6 characters"), 400);
    } 

    try {
        console.log("+++++++++++++++++++++++++++++++")
        const login = await Login.findOne({email: email})
        if (login == null) {
            console.log("_______________________________")
            res.status(404).json({
                success: false,
                message: "user not found"
            })
        } else {
            console.log("login successful, we are sending back the result")
            res.status(201).json({
                success: true,
                message: "user found"
            })
        }
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}