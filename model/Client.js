var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var ClientSchema = new Schema({
    name: String,
    company: String,
    position: String,
    email: String,
    phone1: String,
    email: String,
    address: String,
    city: String,
    zip: String,
    state: String,
    photo: String,
    comment: String,
    photo: String,
    documents: String,
    note: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }, ],
});

module.exports = mongoose.model('Client', ClientSchema);