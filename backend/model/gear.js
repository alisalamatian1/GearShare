
const mongoose = require('mongoose');

const GearSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title!"]
    },
    body: {
        type: String,
        required: [true, "Description"]
    },
    dates: {
        type: String,
        required: [true, "Please enter the available dates"]
    },
    rate: {
        type: String,
        required: [true, "Please enter your rates"]
    },
    contact: {
        type: String,
        required: [true, "Please enter the your prefered contact"]
    }
});

module.exports = mongoose.model('Gear', GearSchema);