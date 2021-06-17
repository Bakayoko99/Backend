const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    ville: String
})

const userModel = mongoose.model("User", userSchema )

module.exports = userModel