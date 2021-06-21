
const { Hotel, Resto } = require('../models/models-trippy')

// Hotels

const findAllHotels = async (req, res) => {

    try {

        const allHotels = await Hotel.find({})

        res.json(allHotels)

    } catch (err) {

        res.status(500).json("error 500")
        console.error(err);
    }

}

const findHotelsById = async (req, res) => {
    try {
        const id = req.params.id

        const hotelsId = await Hotel.findById(id)

        // console.log("hotesId :", hotesId);

        res.json(hotelsId)

    } catch (err) {

        res.status(500).json("error 500")

        console.error(err);

    }
}

const addHotels = async (req, res) => {
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
}

const updateHotelName = async (req, res) => {
    try {
        const id = req.params.id
        const query = req.query.name

        //    const checkId = {_id: id}

        const idFinded = await Hotel.findById(id)
        //   const idFinded = await Hotel.exists(checkId)
        if (idFinded == null) {
            res.json('id not correct')
        } else {

            await Hotel.updateOne({ _id: id }, { name: query })
            res.json("Hotel name updated")
        }


        console.log("id app.put :", id);
        console.log("query app.put :", query);
        console.log("idFinded app.put :", idFinded);


    } catch (err) {

        res.json("error 500")

        console.error(err);

    }
}

const deleteHotels = async (req, res) => {
    try {
        const id = req.params.id

        const idFinded = await Hotel.findById(id)

        if (idFinded == null) {
            res.json("Hotel not founded")
        } else {

            await Hotel.deleteOne({ _id: id })
            res.json("hotel deleted")
        }

    } catch (err) {

        res.json("error 500")

        console.error(err);
    }
}

// Restaurants

const findAllRestos = async (req, res) => {
    try {

        const allRestos = await Resto.find({})

        res.json(allRestos)

    } catch (err) {

        res.json("error 500")
        console.error(err);
    }
}

const findRestoById = async (req, res) => {
    try {
        const id = req.params.id

        const restoId = await Resto.findById(id)

        res.json(restoId)


    } catch (err) {

        res.json("error 500")
        console.error(err);
    }

}

const addRestos = async (req, res) => {
    try {
        const addRestos = req.body

        const restoName = req.body.name

        const findResto = await Resto.find({ name: restoName })

        console.log("findResto post :", findResto[0]);
        console.log("addRestos post :", addRestos);
        console.log("restoName post :", restoName);
        // res.json(`restaurant ${restoName} added`)

        if (findResto[0] == null) {
            await Resto.insertMany(addRestos)
            console.log(findResto);
            res.json(`restaurant ${restoName} added`)
        } else {
            res.json(`restaurant ${restoName} deja present`)
        }

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }

}

const updateRestoName = async (req, res) => {
    try {
        const id = req.params.id
        const query = req.query.name


        const idFinded = await Resto.findById(id)
        //   const idFinded = await Resto.exists(checkId)
        if (idFinded == null) {
            res.json('id not correct')
        } else {

            await Resto.updateOne({ _id: id }, { name: query })
        }

        console.log("id app.put :", id);
        console.log("query app.put :", query);
        console.log("idFinded app.put :", idFinded);

        res.json("Restaurant name updated")

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }

}

const deleteResto = async (req, res) => {
    try {
        const id = req.params.id

        const idFinded = await Resto.findById(id)

        console.log("idFinded delete resto :", idFinded);
        
        if(idFinded == null){
            res.json("Restaurant not founded")
        }else{

            await Resto.deleteOne({ _id: id })
            res.json("Restaurant deleted")
        }


    } catch (err) {

        res.json("error 500")

        console.error(err);
    }

}

module.exports = {
    findAllHotels, findHotelsById,
    addHotels, updateHotelName,
    deleteHotels, findAllRestos,
    findRestoById, addRestos,
    updateRestoName, deleteResto

}