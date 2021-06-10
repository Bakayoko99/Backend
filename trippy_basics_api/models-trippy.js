
const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: {type: Number, min: 1, max: 3}
})

const Hotel = mongoose.model("Hotel", hotelSchema)

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

module.exports = {Hotel, Resto}