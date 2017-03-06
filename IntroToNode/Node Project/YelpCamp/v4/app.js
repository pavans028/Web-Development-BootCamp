var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    methodOverride = require("method-override"),
    localStrategy = require("passport-local"),
    flash = require("connect-flash");
    
    
// Model for each schemas
var Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    initialSeeds    = require("./initialSeed");

// Routes

var campgroundRoute = require("./routes/campground"),
    commentRoute    = require("./routes/comment"),
    indexRoute      = require("./routes/index");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
//initialSeeds(); // fill the database

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
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use("/campgrounds",campgroundRoute);
app.use("/campgrounds/:id/comments",commentRoute);
app.use("/",indexRoute);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is up !!");
});