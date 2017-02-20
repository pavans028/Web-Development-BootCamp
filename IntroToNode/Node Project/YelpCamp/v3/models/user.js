var mongoose            = require("mongoose"),
    passportLocalMong   = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username    : String,
    password    : String
});

userSchema.plugin(passportLocalMong);

module.exports = mongoose.model("User",userSchema);