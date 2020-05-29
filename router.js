var express = require('express');
var app = express();
var router = express.Router();
http = require('http');
const path = require('path');
var request = require('request');
var Client = require('./model/Client');
var Comment = require('./model/Comment');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
})

app.use(express.static('public'));

router.get('/', function(req, res) {
    res.send('Page Client');
});

router.post("/addImage", upload.single("img"), function(req, res) {
    console.log('file:' + req.file);
});

//Creating client
router.post("/add", function(req, res) {
    Client.create({
            name: req.body.name,
            company: req.body.company,
            position: req.body.position,
            email: req.body.email,
            phone1: req.body.phone1,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            state: req.body.state,
            photo: req.body.photo,
            comment: req.body.comment,
            documents: req.body.document,
        },
        function(err) {
            if (err) {
                console.log(err);
            } else {
                res.statusCode = 302;
                res.send('saved');
                console.log("Saved client");
            }
        }
    )
});

//Creating comment
router.post("/add-comment", function(req, res) {
    Comment.create({
            note: req.body.note
        },
        function(err) {
            if (err) {
                console.log(err);
            } else {
                res.statusCode = 302;
                res.end();
                console.log("Saved comment");
            }
        }
    );
});


router.get("/comment", (req, res) => {
    Client.findOne({ clienteId: "200" })
        .populate("note")
        .exec(function(err, story) {
            if (err) return handleError(err);
            console.log("The author is %s", Comment.note);
            // prints "The author is Ian Fleming"
        });
});

//list Client
router.get('/client/:id', (req, res) => {
    var user = [];
    var x;
    var clienteId = req.params.id
    Client.find({ clienteId })
        .then((result) => {
            res.json(result);
            console.log("json :" + result);
            res.end();
        })
        .catch((err) => {
            res
                .status(500)
                .json({ success: false, msg: `Something went wrong. ${err}` });
        });
});

//Edit Client
//Delete Client
//Upload files

module.exports = router;