const Gear = require('../model/gearSchema');
const ErrorResponse = require('../util/errorResponse');

exports.list_all = async (req, res, next) => {
    try {
        const filter = {};
        const all = await Gear.find(filter);

        res.status(200).json({
            gears_list: all
        });

    } catch(err) {
        res.status(500).json({
            success:false, 
            error:err.message
        });
    }
}

exports.post = async (req, res, next) => {
    const {title, body, dates, rate, contact, image} = req.body;

    if(!title || !body || !dates || !rate || !contact) {
        return next(new ErrorResponse("Please provide all the title, description, dates, rate, and contact", 400));
    }

    try {
        const gear = await Gear.create({
            title, body, dates, rate, contact, image
        });

        res.status(201).json({
            success: true,
            message: "gear Posted"
        })

    } catch(err) {
        res.status(500).json({
            success: false, 
            error: err.message
        });
    }
}