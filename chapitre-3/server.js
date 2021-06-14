
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest:'public/uploads/'})

const port = 8085

const app = express()

app.use(cors())

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    const imagez = req.body
    console.log("imagez post :",imagez );

    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));


    res.json('ok')
})



app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})



