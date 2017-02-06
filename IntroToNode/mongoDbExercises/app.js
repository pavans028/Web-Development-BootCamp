var mongoose = require("mongoose");
// connect to the server/database using connect() with the url.
mongoose.connect("mongodb://localhost/cat_app");

// make schema ready like who the object structure would be
var catSchema =  new mongoose.Schema({
    name: String,
    age:Number,
    temperament: String
});

// catSchema is just a pattern
// now compile it and make the model ready with the above schema.
// "Cat" in the param should be singular as the model creates the collection with plural form.
var Cat = mongoose.model("Cat", catSchema); 

// this Cat variable can be used to do CRUD operations.

//-------->
// create a cat variables with Values.
var new_cat = new Cat({
    name : "Tommy",
    age : 12,
    temperament: "Grouchy"
});
// this wil add george to db
new_cat.save(function(err, cat_saved){
    if(err){
        console.log("Something went wrong.");
    }else{
        console.log("Success!!\n"+cat_saved);
    }
});

//----------> FIRST WAY

//-------->
// create a cat variables with Values.
Cat.create({
    name : "Sticky",
    age : 14,
    temperament: "Roughy"
},function(err, cat_saved){
    if(err){
        console.log("Something went wrong.");
    }else{
        console.log("Success!!\n"+cat_saved);
    }
});

//----------> SECOND WAY


// FInd a cat in db
Cat.find({},function(err, cat_found){
    if(err){
        console.log("Something went wrong."+err);
    }else{
        console.log("Found this -->>\n"+cat_found);
    }
});
