const  mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({

    email: String,
    password: String,
    firstName: String,
    surname: String,
    date_of_birth: Date
})

const logModel = mongoose.model('Log', loginSchema)

module.exports = logModel