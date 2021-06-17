
const expressValidator = require('express-validator')
const passwordValidator = require('password-validator');

const validationUsers = [
    expressValidator.body('username').isLength({ min: 4 }),
    expressValidator.body('email').isEmail(),
    expressValidator.body('age').isNumeric().isLength({ max: 2 }),
    expressValidator.body('ville').custom((value) => {
        const schema = new passwordValidator();
        schema
            .is().oneOf(["Paris", "Tokio", "Los Angeles"]);
        return schema.validate(value);
    })]

    module.exports = {
        validationUsers
    }