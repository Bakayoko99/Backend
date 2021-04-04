
const { json } = require('express');
const express = require('express');
const app = express();


var port = 8006;

var authors = [

{  
    author:{
        name: "Lawrence Nowell",
        nationality: "UK"
    },
    books:{
        books: "Beowulf"
    }
},
    
{   
    author:{
        name: "William Shakespeare",
        nationality: "UK"
    },
    books:{
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth"
    }
},

{    
    author:{
        name: "Charles Dickens",
        nationality: "US"
    },
    books:{
        books: "Oliver Twist, A Christmas Carol"
    }
},

{ 
    author:{
        name: "Oscar Wilde",
        nationality: "UK"
    },
    books:{
        books: "The Picture of Dorian Gray, The Importance of Being Earnest"
    }
}
]  

app.get('/json/authors/:id', (req, res) =>{

    namesAndNationality = req.params.id

    
    switch(namesAndNationality){

        case "1":
            authorsInfo = authors[0].author;
        break;

        case "2":
            authorsInfo = authors[1].author;
        break;

        case "3":
            authorsInfo = authors[2].author;
        break;

        case "4":
            authorsInfo = authors[3].author;
        break;
            
    }

    res.send(

        authorsInfo

    )

})

app.get('/json/authors/:id/books', (req, res) => {

    authorLivres = req.params.id


    switch(authorLivres){

        case "1":
            authorsInfo = authors[0].books;
        break;

        case "2":
            authorsInfo = authors[1].books;
        break;

        case "3":
            authorsInfo = authors[2].books;
        break;

        case "4":
            authorsInfo = authors[3].books;
        break;
            
    }

    res.send(

        authorsInfo

    )


})





app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });

