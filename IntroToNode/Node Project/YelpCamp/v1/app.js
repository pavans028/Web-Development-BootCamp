var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Static variable for campgrounds list
var campgrounds = [
    {
        "name":"Pictured Rocks",
        "imageURL":"http://www.thingstodointheup.com/wp-content/uploads/2012/08/hurricane-river-campsite.jpg"
    },
    {
        "name":"Michigan",
        "imageURL":"http://www.thingstodointheup.com/wp-content/uploads/2012/08/hurricane-river-shipwreck-sunset.jpg"
    }];

app.get("/", function(req,res){
   res.render("home");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds",{ campgrounds : campgrounds });
});

app.post("/campgrounds", function(req,res){
    // read the data from the form and make it a campground object and push it into campgrounds.
    var parsed_data = req.body;
    var campground={};
    campground.name = parsed_data.name;
    campground.imageURL = parsed_data.imageURL;
    campgrounds.push(campground);
    // redirect the same to campgrounds page, redirect always happens to a get route default.
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("add_new_campground");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is up !!")
});