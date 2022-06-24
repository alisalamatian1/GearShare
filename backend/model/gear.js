
const mongoose = require('mongoose');

const GearSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title!"]
    },
    body: {
        type: String,
        required: [true, "Description"]
    }
});

module.exports = mongoose.model('Gear', GearSchema);