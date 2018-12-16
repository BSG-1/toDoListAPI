//starting the server
var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

app.listen(port);

console.log('To do list RESTful API listening on port: ' + port);
