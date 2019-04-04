/*

    This file is the server file that will hold and run all the pages on set paths.  Any minor bugs will cuase major problems, so be careful when editing and changing.
    
    Author: Abraham Aguilar
    Date: 04.03.19
    
    index.js
    
    Updated: [NULL]

*/

var express = require('express');
var app = express();
var config = require('./config.json');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('./index.html');
});

app.listen(config.port, function () {
    console.log("Server listening on localhost:%s", config.port);
});
