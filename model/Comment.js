var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var CommentSchema = new Schema({
    note: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
});

module.exports = mongoose.model('Comment', CommentSchema);