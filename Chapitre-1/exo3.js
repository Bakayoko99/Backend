
const express = require('express');
const app = express();


var port = 8005;

app.get('/authors/:authorsId/books/', (req, res) => {

    var numb = req.params.authorsId;

    switch (numb) {

        case "1":
            authorsBooks = "Beowulf";
            break;

        case "2":
            authorsBooks = "Hamlet, Othello, Romeo and Juliet, MacBeth";
            break;

        case "3":
            authorsBooks = "Oliver Twist, A Christmas Carol";
            break;

        case "4":
            authorsBooks = "The Picture of Dorian Gray, The Importance of Being Earnest";
            break;

        default:
            authorsBooks = "not found"
            break;

    }

    res.json({
        books: authorsBooks
    })
})


app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

