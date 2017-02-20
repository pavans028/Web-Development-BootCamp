var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local");
    
    
// Model for each schemas
var Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    initialSeeds    = require("./initialSeed");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

initialSeeds(); // fill the database

// Configure the PASSPORT package
app.use(require("express-session")({
    secret      : "Secret signs the session ID",
    resave      :false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to pass the user session info thru out the app
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

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

app.get("/campgrounds/:id/comments/new", isUserLoggedIn, function(req,res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            res.render("comments/add_new_comment",{campground:campground});
        }    
    });
    
});

app.post("/campgrounds/:id/comments", isUserLoggedIn, function(req,res){
    
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


// AUTH ROUTES

app.get("/signup", function(req, res) {
   res.render("signup"); 
});

app.post("/signup", function(req, res) {
   var newUser = new User({username:req.body.username});
   User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log("Something went wrong in signing up!!\n"+err);
            return res.render("signup");     
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");         
        });
   });
});

app.get("/signin", function(req, res) {
    res.render("signin"); 
});
app.post("/signin", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/signin"
}), function(req, res){});

app.get("/signout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

// Middleware to check for User session.
function isUserLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is up !!");
});