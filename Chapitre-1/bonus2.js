

const express = require('express');
const app = express();

var allPokemons = require('./bonus-2/dataPokemon')

var port = 8099;


app.get("/pokemon/:id", (req, res) =>{
    
    pokeName = req.params.id
    var pokemon = allPokemons[pokeName - 1].name
    res.json({

       pokemon

    })
    
    // console.log(allPokemons);



})

app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });