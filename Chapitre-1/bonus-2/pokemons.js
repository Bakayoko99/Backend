
var request = require('request')

function getPokemons(){

request.get('http://localhost:8099/pokemon/25', (err, res, body) =>{

    console.log(JSON.parse(body) )

})
}
getPokemons()