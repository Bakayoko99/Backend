
const { validationResult } = require('express-validator');
const { error } = require('jquery');
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

    if (usernameFinded === null) {
        res.json(`username ${userName} not found`)
    } else {

        res.json(usernameFinded)
    }

}

const oneUserFromId = async (req, res) => {

    try {

        const userId = req.params.id

        const idFinded = await userModel.findById(userId)

        console.log("idFinded :", idFinded);

        console.log("userId :", userId );

        res.json(idFinded)

    } catch (error) {
        
        res.status(404).json("id not foud")

    }

}

const oneUserFromEmail = async (req, res) => {

    try {
        
        const userEmail = req.params.email

        const emailFinded = await userModel.findOne({email: userEmail})

        if(emailFinded === null){
            res.json('Email not available')
        }
        
        res.json(emailFinded)

    } catch (error) {
        
        res.status(404).json("Email not found")

    }
}

module.exports = { addUser, userCheck, oneUserFromName, oneUserFromId, oneUserFromEmail }


// {
//     "username": "bakagnan",
//     "email": "lollo98@gmail.com",
//     "age": "22",
//     "ville": "Paris"
// }
