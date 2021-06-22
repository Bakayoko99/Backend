
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/authentification', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("I'm connected to the database");
    }
})

const port = 8095

const app = express()

app.use(express.json())
app.use(cors())

const authSchema = new mongoose.Schema({
    username: String,
    password: String
})
const authModel = mongoose.model('Auth', authSchema)

app.post('/signup', async (req, res) => {

    const userName = req.body.username
    const passWord = req.body.password

    const pswCrypt = bcrypt.hashSync(passWord)

    const addUser = await authModel.create({username: userName, password: pswCrypt})

    console.log("psw :", pswCrypt);

    res.json(`OK TEST ${userName}, ${passWord}`)
})




app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})