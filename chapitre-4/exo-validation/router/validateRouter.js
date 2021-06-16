
const express = require('express');
const { mongoose } = require('mongoose');
const router = express.Router();
const validateController = require('../controllers/validateControllers');

mongoose.connect("mongodb://localhost:27017/usersValidate", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err){
        console.log(err);
    }else {
        console.log("I'm connected to the database")
    }
} )

router.get('/')

router.post('/users/add', validateController);
