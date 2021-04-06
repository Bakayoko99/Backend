
var request =  require('request')

function callAPI(){

  request.get('http://localhost:8001/countries', function(err, res, body){

//  var ok = body.reverse()

  console.log( JSON.parse(body) );

  })

}
callAPI()
