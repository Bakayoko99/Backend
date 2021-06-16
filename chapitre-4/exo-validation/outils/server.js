
const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');
 
const validateRouter = require('../router/validateRouter');




const port = 8008

const app = express()

app.use(express.json())
app.use(cors())


app.use('/users', validateRouter);

    


app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})


