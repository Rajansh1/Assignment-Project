const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('user', userSchema)