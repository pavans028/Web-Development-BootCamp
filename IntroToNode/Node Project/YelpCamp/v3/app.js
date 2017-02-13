var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
// Model for each schemas
var Campground      = require("./models/campground"),
    Comment      = require("./models/comment"),
    initialSeeds    = require("./initialSeed");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

initialSeeds(); // fill the database

app.get("/", function(req,res){
   res.render("home");
});

app.get("/campgrounds", function(req,res){
    // take it from database now.
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("Something wrong in fetching campground!!"+err);
        }else{
           res.render("campgrounds/index",{ campgrounds : campgrounds }); 
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
    res.render("campgrounds/add_new_campground");
});
// order matters
app.get("/campgrounds/:id", function(req,res){
    // get the id of the campground selected the take out the info from db
    Campground.findById(req.params.id).populate("comments").exec(function(err, campground_found){
        if(err){
            console.log("Something went wrong.\n"+err);
        }else{
            // display the full info in the show template
            res.render("campgrounds/show_campground",{campground:campground_found});  
        }
    });
    
});

// COMMENTS ROUTES

app.get("/campgrounds/:id/comments/new", function(req,res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            res.render("comments/add_new_comment",{campground:campground});
        }    
    });
    
});

app.post("/campgrounds/:id/comments", function(req,res){
    
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            //console.log("Bodyy\n"+req.body.comment);
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log("Something went wrong!! \n"+err);
                }else{
                    campground.comments.push(comment);
                    Campground.create(campground, function(err, campground) {
                        if(err){
                            console.log("Something went wrong!! \n"+err);
                        }else{
                            res.redirect("/campgrounds/"+req.params.id);
                        }
                    });
                }
            });
        }    
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is up !!");
});