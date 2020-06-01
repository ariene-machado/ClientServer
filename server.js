var express = require('express');
var app = express();
var router_user = require('./router.js');
var PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
var express = require('express')
var multer = require('multer')


http = require('http');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/ClientDb';

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://admdb:aladim2019@ds339458.mlab.com:39458/heroku_dhdmg4z4');

mongoose.connect(process.env.MONGODB_URI || mongoDB); //se o banco or local funciona

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(200);
    } else {
        next();
    }
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', router_user);

app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

module.exports = app;