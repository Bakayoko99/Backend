
var request = require('request');


function getCountries(){
    
    request.get("http://localhost:8010/countries/", function(err, res, body){

        console.log(JSON.parse(body) );
    })

}
getCountries()