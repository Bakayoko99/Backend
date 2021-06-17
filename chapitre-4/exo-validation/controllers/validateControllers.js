
const { validationResult } = require('express-validator');
const userModel = require("../model/usersModel");


const addUser = async (req, res) => {

    const errors = validationResult(req);
    console.log('req :', req.body);
    console.log('errors :', errors);

    const user = req.body

    if (errors.isEmpty() === false) {
        res.status(400).json({ errors: "error 400" })
    } else {
        await userModel.insertMany([{ user }])
        res.json("user added")
    }

    res.json("okk")
}
// res.json("validateController ok")

// validateController()

const userCheck = async (req, res) => {
    try {
        const users = await userModel.find({})
        console.log(users[0]);

        if (users[0] === undefined) {
            res.json("users not found")
        }
        res.json({ users: users })

    } catch (error) {
        res.json("users not found  ")
    }

}

module.exports = { addUser, userCheck }


// {
//     "username": "bakagnan",
//     "email": "lollo98@gmail.com",
//     "age": "22",
//     "ville": "Paris"
// }
