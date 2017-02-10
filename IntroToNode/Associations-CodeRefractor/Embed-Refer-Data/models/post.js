/*require variables*/
var mongoose = require("mongoose");

//Post schema
var postSchema = new mongoose.Schema({
    postTitle:  String,
    postBody:   String
});

//Post Model
module.exports = mongoose.model("Post",postSchema);