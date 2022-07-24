const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    job_id: {
        type: String
    },
    job_name: {
        type: String
    },
    job_description: {
        type: String
    },
    experience: {
        type: String
    },
    salary: {
        type: String
    },
    userId:[{user_id:{type: mongoose.Schema.Types.ObjectId, ref: "user",}}]
})
module.exports = mongoose.model('job', jobSchema)