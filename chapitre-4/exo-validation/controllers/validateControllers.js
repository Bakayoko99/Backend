
const { validationResult } = require('express-validator');
const userModel = require("../model/usersModel");


const addUser = async (req, res) => {

    const errors = validationResult(req);
    console.log('req :', req.body);
    console.log('errors :', errors);

    const user = req.body

    console.log("user :", user);

    if (errors.isEmpty() === false) {
        res.status(400).json({ errors: "error 400" })
    } else {
        await userModel.create(user)
        res.json("user added")
    }

    // res.json("okk")
}

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

const oneUserFromName = async (req, res) => {

    const userName = req.params.username

    const usernameFinded = await userModel.findOne({ username: userName })

    console.log("userName :", userName);

    if(usernameFinded === null){
        res.json(`username ${userName} not found`)
    }else{
        
        res.json(usernameFinded)
    }

}

const oneUserFromId = async (req, res) => {

    const userId = req.params.id

    const idFinded = await userModel.findById(userId)

    console.log("idFinded :", idFinded);

    console.log("userId :", userId);

    res.json("oneUserFromId check")
}

module.exports = { addUser, userCheck, oneUserFromName, oneUserFromId }


// {
//     "username": "bakagnan",
//     "email": "lollo98@gmail.com",
//     "age": "22",
//     "ville": "Paris"
// }
