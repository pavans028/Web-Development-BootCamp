var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Make Schemas ready
var campground_schema = new mongoose.Schema({
    name:String,
    imageURL:String,
    description: String
});

// Model for each schemas
var Campground = mongoose.model("Campground",campground_schema);

// One entry into db
/*Campground.create({
    name:"Pictured Rocks",
    imageURL:"http://www.thingstodointheup.com/wp-content/uploads/2012/08/hurricane-river-campsite.jpg",
    description:"This is a beautiful place located next to Superior lake."
}, function(err, campground_saved){
    if(err){
        console.log("Something went wrong.\n"+err);
    }else{
        console.log("Success!!");
    }
});*/

app.get("/", function(req,res){
   res.render("home");
});

app.get("/campgrounds", function(req,res){
    // take it from database now.
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("Something wrong in fetching campground!!"+err);
        }else{
           res.render("index",{ campgrounds : campgrounds }); 
        }
    });
    
});

app.post("/campgrounds", function(req,res){
    // read the data from the form and make it a campground object and put it in the database.
    var parsed_data = req.body;
    Campground.create({
        name : parsed_data.name,
        imageURL : parsed_data.imageURL,
        description : parsed_data.description
    },
        function(err){
            if(err){
                console.log("Something went wrong.\n"+err);
            }else{
                // redirect the same to campgrounds page, redirect always happens to a get route default.
                res.redirect("/campgrounds");
            }
        }
    );
});

app.get("/campgrounds/new", function(req,res){
    res.render("add_new_campground");
});
// order matters
app.get("/campgrounds/:id", function(req,res){
    // get the id of the campground selected the take out the info from db
    Campground.findById(req.params.id,function(err, campground_found){
        if(err){
            console.log("Something went wrong.\n"+err);
        }else{
            // display the full info in the show template
            res.render("show_campground",{campground:campground_found});  
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is up !!")
});