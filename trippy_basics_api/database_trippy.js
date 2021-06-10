
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {Hotel, Resto} = require('./models-trippy')

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

    try {

        const allHotels = await Hotel.find({})

        res.json(allHotels)

    } catch (err) {

        res.json("error 500")
        console.error(err);
    }

})

app.get('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id

        const hotelsId = await Hotel.findById(id)

        // console.log("hotesId :", hotesId);

        res.json(hotelsId)

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }

})

app.post('/hotels', async (req, res) => {

    try {
        const addHotel = req.body

        const hotelName = req.body.name

        const findHotel = await Hotel.find({ name: hotelName })

        console.log("findHotel post :", findHotel);

        if (findHotel[0] == null) {
            await Hotel.insertMany(addHotel)
            console.log(findHotel);
            res.json(`hotel ${hotelName} added`)
        } else {
            res.json(`hotel ${hotelName} deja present`)
        }

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }


})

app.put('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id
        const query = req.query.name

        //    const checkId = {_id: id}

        const idFinded = await Hotel.findById(id)
        //   const idFinded = await Hotel.exists(checkId)
        const updateHotel = await Hotel.updateOne({ _id: id }, { name: query })

        console.log("id app.put :", id);
        console.log("query app.put :", query);
        console.log("idFinded app.put :", idFinded);

        res.json("ok")

    } catch (err) {

        res.json("error 500")

        // console.error(err);

    }


})

app.delete('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id

        await Hotel.deleteOne({ _id: id })

        res.json("hotel deleted")

    } catch (err) {

        res.json("error 500")

        // console.error(err);
    }

})


































app.listen(port, () => {
    console.log('Server started on port: ' + port);
});