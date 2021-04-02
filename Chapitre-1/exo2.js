const express = require('express');
const app = express();


var port = 8000;


app.get('/authors/:authorsId', (req, res) => {

    var numb = req.params.authorsId;
    // nameAndState = "";

    switch (numb) {
        case "1":
            nameAndState = "Lawrence Nowell, UK";
            break;

        case "2":
            nameAndState = "William Shakespeare, UK";
            break;

        case "3":
            nameAndState = "Charles Dickens, US";
            break;

        case "4":
            nameAndState = "Oscar Wilde, UK";
            break;

        default:
            nameAndState = "not found";
            break;
    }

    res.json({
        authors: nameAndState

    });

});





app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

