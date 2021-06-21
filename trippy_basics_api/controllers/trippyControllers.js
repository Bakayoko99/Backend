

const {Hotel, Resto} = require('../models/models-trippy')

const findAllHotels = async (req, res) => {

    try {

        const allHotels = await Hotel.find({})

        res.json(allHotels)

    } catch (err) {

        res.status(500).json("error 500")
        console.error(err);
    }

}

module.exports = {findAllHotels}