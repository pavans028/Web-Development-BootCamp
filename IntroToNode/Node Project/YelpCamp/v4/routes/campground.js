var express = require("express");
var router  = express.Router({mergeParams:true});

//module dependancy
var Campground = require("../models/campground");
var middleware = require("../middleware");

router.get("/", function(req,res){
    // take it from database now.
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("Something wrong in fetching campground!!"+err);
        }else{
           res.render("campgrounds/index",{ campgrounds : campgrounds }); 
        }
    });
    
});

router.post("/", middleware.isUserLoggedIn, function(req,res){
    // read the data from the form and make it a campground object and put it in the database.
    var parsed_data = req.body;
    Campground.create({
        name : parsed_data.name,
        imageURL : parsed_data.imageURL,
        description : parsed_data.description,
        price : parsed_data.price,
        author: {
            id: req.user._id,
            username : req.user.username
        }
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

router.get("/new", middleware.isUserLoggedIn, function(req,res){
    res.render("campgrounds/add_new_campground");
});
// order matters
router.get("/:id", function(req,res){
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

// Campground Info edit

router.get("/:id/edit", middleware.isUserAuthorized, function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            req.flash("error","No such campground found!");
            res.render("/campgrounds");
        }
        else{
             res.render("campgrounds/edit", {campground:campground}); 
        }
    });
});

// Campground Info Update

router.put("/:id", middleware.isUserAuthorized, function(req,res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground,
        function(err, updatedCampground) {
            if(err){
                res.redirect("/campgrounds");
            }else{
                req.flash("success","You updated the campground!");
                res.redirect("/campgrounds/"+req.params.id);
            }
    });
});

// Destroy the campground
router.delete("/:id", middleware.isUserAuthorized, function(req,res){
   Campground.findByIdAndRemove(req.params.id, function(err) {
       if(err){
            console.log("Something went wrong while removing campground\n"+err);
            res.redirect("/campgrounds");   
       }else{
           req.flash("success","You deleted the campground!");
           res.redirect("/campgrounds");
       }
   });
});


// MIDDLEWARE FUCNTIONS

module.exports = router;