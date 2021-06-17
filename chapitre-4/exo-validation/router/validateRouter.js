
const express = require('express');
const router = express.Router();


const {userCheck, addUser } = require('../controllers/validateControllers');


router.get('/', userCheck)

router.post('/add', addUser);

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage : "The route was not found"
    })
})

module.exports = {
    validateRouter : router
}
