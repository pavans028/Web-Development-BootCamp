/*require variables*/
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name:   String,
    email:  String,
    posts: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref:   "Post"
    }]
});
// User model
module.exports = mongoose.model("User",userSchema);