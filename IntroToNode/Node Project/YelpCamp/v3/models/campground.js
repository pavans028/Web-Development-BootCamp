var mongoose = require("mongoose");

// Make Schemas ready
var campgroundSchema = new mongoose.Schema({
    name        :   String,
    imageURL    :   String,
    description :   String,
    comments    :   [{
        type    :   mongoose.Schema.Types.ObjectId,
        ref     :   "Comment"
    }]
});

// Model for each schemas
module.exports = mongoose.model("Campground",campgroundSchema);
