
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Hotel = require("./model-hotel")
const Resto = require("./model-resto")

const app = express()

app.use(express.json())

app.use(cors())

const port = 8088;

mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("i'm connected to the database");
    }
})

app.get('/hotels', async (req, res) => {

    const allHotels = await Hotel.find({})

    res.json(allHotels)
})

app.get('/hotels/:id', async (req, res) => {

    const id = req.params.id

    const hotesId = await Hotel.findById({})
})






















app.listen(port, () => {
    console.log('Server started on port: ' + port);
});