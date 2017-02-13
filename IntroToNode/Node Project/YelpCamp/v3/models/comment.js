var mongoose = require("mongoose");
// Comment schema
var commentSchema = new mongoose.Schema({
    text    :   String,
    author  :   String
});

module.exports = mongoose.model("Comment",commentSchema);