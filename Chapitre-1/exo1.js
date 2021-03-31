const express = require('express');
const app = express();

var port = 8000;

app.get('/', (req, res) => {
    res.send('Authors API');
  });

app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });