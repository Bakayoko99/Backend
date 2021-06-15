
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    profilePicture: String
})

const User = mongoose.model('User', userSchema)

module.exports = userSchema