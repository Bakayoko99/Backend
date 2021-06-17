const expressValidator = require('express-validator')
const passwordValidator = require('password-validator');
const { validationResult } = require('express-validator');
const userModel = require("../model/usersModel");


const addUser = () => {
    expressValidator.body('username').isLength({ min: 4 }),
        expressValidator.body('email').isEmail(),
        expressValidator.body('age').isNumeric().isLength({ max: 2 }),
        expressValidator.body('ville').custom((value) => {
            const schema = new passwordValidator();
            schema
                .is().oneOf(["Paris", "Tokio", "Los Angeles"]);
            return schema.validate(value);
        }),
        (req, res) => {
            const errors = validationResult(req);
            console.log('req :', req.body);
            console.log('errors :', errors);

            if (errors.isEmpty() === false) {
                res.status(400).json({ errors: "error 400" })
            }

            res.json("okk")
        }
    // res.json("validateController ok")
}
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
