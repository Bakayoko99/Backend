
const express = require('express');
const router = express.Router();

const { findAllHotels, findHotelsById, addHotels,
    updateHotelName, deleteHotels, findAllRestos,
    findRestoById, addRestos, updateRestoName, deleteResto

} = require('../controllers/trippyControllers')

// Hotels

router.get('/hotels', findAllHotels)

router.get('/hotels/:id', findHotelsById)

router.post('/hotels', addHotels)

router.put('/hotels/:id', updateHotelName)

router.delete('/hotels/:id', deleteHotels)

// Restaurants

router.get('/restaurant', findAllRestos)

router.get('/restaurant/:id', findRestoById)

router.post('/restaurant', addRestos)

router.put('/restaurant/:id', updateRestoName)

router.delete('/restaurant/:id', deleteResto)