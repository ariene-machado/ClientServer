var express = require('express');
var app = express();
var router = express.Router();
http = require('http');
const path = require('path');
var request = require('request');


router.get('/', function(req, res) {
    res.send('Page Client');
});

module.exports = router;