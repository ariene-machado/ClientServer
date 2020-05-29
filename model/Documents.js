var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Photo
var DocumentsSchema = new Schema({
    clienteId: String,
    documentID: String,
    documnetName: String
});

module.exports = mongoose.model('Documents', DocumentsSchema);