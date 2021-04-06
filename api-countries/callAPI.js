
var request =  require('request')

function callAPI(){

  request.get('http://localhost:8001/countries', (err, res, body) => {

  console.log( JSON.parse(body).reverse() );

  })

}
callAPI()
