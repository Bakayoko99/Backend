const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    ville: String
})

const userModel = mongoose.Schema("user", userSchema )

module.exports = {userModel}