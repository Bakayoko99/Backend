const express = require('express');
const app = express();


var port = 8000;


app.get('/:authors/', (req, res) => {
    
    var noms = req.params.authors

    switch(noms){
        case 1 :
            "Lawrence Nowell, UK"
            break;

        case 2 :
            "William Shakespeare, UK"
            break;
        
        case 3 :
            "Charles Dickens, US"
            break;

        case 4 :
            "Oscar Wilde, UK"
            break;
    }

    res.json({
        message : noms

    })

  });





app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
