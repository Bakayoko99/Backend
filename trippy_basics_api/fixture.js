
const mongoose = require("mongoose");
const {Hotel, Resto} = require('./models-trippy')

mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("i'm connected to the database");
    }
})

const addHotels = async () => {
    await Hotel.insertMany([
        {
            name: "Hotel test",
            address: "adress hotel test",
            city: "city hotel test",
            country: "country hotel test",
            stars: 3,
            hasSpa: true,
            hasPool: false,
            priceCategory: 3
        }
    ])
}
addHotels()

const addRestos = async () => {
    await Resto.insertMany([
        {
            name: "Resto test",
            address: "address resto test",
            city: "city resto test",
            country: "country resto test",
            stars: 3,
            cuisine: "cuisine test",
            priceCategory: 3
        }
    ])
}
addRestos()