
const express = require('express');
const Router = express.Router();

const {findAllHotels,} = require('../controllers/trippyControllers')

Router.get('/hotels', findAllHotels )

Router.get('/hotels/:id')