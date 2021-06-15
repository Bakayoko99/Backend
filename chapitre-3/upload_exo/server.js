
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const User = require('./model-upload');

const upload = multer({ dest:'public/uploads/'})

const port = 8085

const app = express()

app.use(express.json())


app.use(cors())

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    const imagez = req.file
    // const body = req.body
    console.log("imagez post :",imagez );
    // console.log("body post :",body );
return res.json("test")
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));


    res.json('ok')
})



app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})



