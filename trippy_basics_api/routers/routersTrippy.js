
const express = require('express');
const router = express.Router();

const { findAllHotels, findHotelsById, addHotels,
    updateHotelName, deleteHotels, findAllRestos,
    findRestoById, addRestos, updateRestoName, deleteResto

} = require('../controllers/trippyControllers')

// Hotels

router.get('/', findAllHotels)

router.get('/:id', findHotelsById)

router.post('/', addHotels)

router.put('/:id', updateHotelName)

router.delete('/:id', deleteHotels)

// Restaurants

router.get('/', findAllRestos)

router.get('/:id', findRestoById)

router.post('/', addRestos)

router.put('/:id', updateRestoName)

router.delete('/:id', deleteResto)

module.exports = {
    routersTrippy : router
}