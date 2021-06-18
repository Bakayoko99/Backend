
const express = require('express');
const router = express.Router();


const {userCheck, addUser, oneUserFromName, oneUserFromId, oneUserFromEmail } = require('../controllers/validateControllers');
const { validationUsers } = require('../middleweares/validationMiddelware');


router.get('/', userCheck)

router.post('/add', validationUsers, addUser);

router.get('/username/:username', oneUserFromName)

router.get('/:id', oneUserFromId)

router.get('/email/:email', oneUserFromEmail)



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage : "The route was not found"
    })
})

module.exports = {
    validateRouter : router
}
