
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

var port = 8098;



app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });