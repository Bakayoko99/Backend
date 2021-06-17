
const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');

const debug = require('./middleweares/debug')
const {validateRouter} = require('./router/validateRouter');

mongoose.connect("mongodb://localhost:27017/usersValidate", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err){
        console.log(err);
    }else {
        console.log("I'm connected to the database")
    }
} )




const port = 8008

const app = express()

app.use(express.json())
app.use(cors())

app.use(debug)
app.use('/users', validateRouter, (req, res) => {
    res.json("route server ok")
});

    


app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})


