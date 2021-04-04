const express = require('express');
const app = express();

var allCountries = require("./dataCountries") 

var port = 8010;




  app.get('/countries/', (req, res) => {

    // var countries = req.params

    // countries = 
    

    res.json({
  
        allCountries
  
    })

  })



  app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });