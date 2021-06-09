
const mongoose = require("mongoose");

const restoSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    cuisine: String,
    priceCategory: {type: Number, min: 1, max: 3}
})

const Resto = mongoose.model("Resto", restoSchema)

module.exports = Resto