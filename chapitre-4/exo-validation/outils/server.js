
const express = require('express');
const cors = require('cors');

const validateController = require('../controllers/validateControllers');


const port = 8008

const app = express()

app.use(express.json())
app.use(cors())


// app.post('/signup',
//     expressValidator.body('username').isEmail(),
//     expressValidator.body('password').custom((value) => {
//         const schema = new passwordValidator();
//         schema

//     })
// )

// app.get('/', (req, res) => {

// })

app.post('/users/add', validateController);

    


app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})


