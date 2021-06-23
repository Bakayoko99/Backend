
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/authentification', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
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

    try {

        const userName = req.body.username
        const passWord = req.body.password

        const pswCrypt = bcrypt.hashSync(passWord)

        await authModel.create({ username: userName, password: pswCrypt })

        console.log("psw :", pswCrypt);

        res.json(`OK TEST ${userName}, ${passWord}`)
    }

    catch (error) {

        res.status(401).json("not found")

    }
})


app.post('/login', async (req, res) => {

    try {

        const userName = req.body.username
        const password = req.body.password

        const findUsername = await authModel.findOne({ username: userName }).lean()

        console.log("findUsername :", findUsername);

        const comparedPsw = await bcrypt.compare(password, findUsername.password)

        if (findUsername === null) {

            res.json('username not founded')

        } else {
            
            if(comparedPsw === true){

                const assignToken = await jwt.sign({id: findUsername._id}, "monCodeSecret",{expiresIn: 60 * 60})

                console.log("assignToken :", assignToken);

                // console.log(config.secret);

                res.json(`Welcome ${userName} your private key ${assignToken}`)

            }else{
                res.json(`${userName} incorrect password`)
            }

            res.json(`OK`)
        }

        res.json("TEST LOGIN")

    } catch (error) {

        res.status(401).json({message:"Error", error})
    }
})

const verifyToken = async (req, res, next) => {

    try {
        
        const verifyToken = req.headers.Athorization

        console.log( "verifyToken :",verifyToken);

    } catch (error) {

        res.status(500).json({message: error})
        
    }
}

app.get('/private', verifyToken, async (req, res) => {

    res.json("your private route")

})




app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})