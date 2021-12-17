const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    credits: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Course', courseSchema);