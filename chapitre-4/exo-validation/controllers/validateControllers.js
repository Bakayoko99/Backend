const expressValidator = require('express-validator')
const passwordValidator = require('password-validator');
const { validationResult } = require('express-validator');

const validateController = () => {
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
            res.status(400).json({errors: "error 400"})
        }

        res.json("okk")
    }
}

module.exports = validateController