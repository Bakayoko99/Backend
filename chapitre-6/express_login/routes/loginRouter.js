
const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/loginControllers')


router.post('/signup', signup)

router.post('/login')

router.post('/admin')

module.exports = router