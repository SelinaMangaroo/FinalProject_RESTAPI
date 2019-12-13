
//require express library
const express = require('express');

const path = require('path');

//create an instance of express server.
var app = express();

const data = require(__dirname + '/courses.json');

//Routing
var router = require('./routes.js');

app.use('/', router);
app.use('/courses', router);

app.set('view engine', 'ejs');

app.listen(3000, function () {     //listen, means start listening for network connections
  console.log('REST API, listening on port 3000!');
});
