
const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors())


var port = 8001;

var fiveCountries = [
  
  "name: france",

  "name: italy",

  "name: ivory coast",

  "name: U.S.A",
  
  "name: japan"
]

app.get('/countries/', (req, res) => {

  // console.log(Object.values());

  res.send({
    
    
    fiveCountries
    
  })


})

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


module.exports = fiveCountries;


// console.log(fiveCountries.reverse());