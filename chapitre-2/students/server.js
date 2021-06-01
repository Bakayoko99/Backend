
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

var port = 8098;


const studentsName = []
// const studentsName = ["amir", "mugilan", "asma", "karim", "faruk"]

app.get('/students', (req, res) => {
    res.json(
        studentsName
    )
})

app.post('/students',(req, res) => {

    const newName = req.body.name

    studentsName.push(newName)

    res.json('ok');
    console.log(newName);
    
})




app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
  