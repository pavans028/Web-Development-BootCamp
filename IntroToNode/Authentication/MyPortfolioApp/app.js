//Require variables
var express                 = require("express"),
    app                     = express(),
    passport                = require("passport"),
    passportLocal           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    expressSession          = require("express-session"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    fs                      = require("fs"),
    User                    = require("./models/user");
    
mongoose.connect("mongodb://localhost/portfolio");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.use(expressSession({
    secret : "To open in editing mode!!",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new passportLocal(User.authenticate()));
/*======================
        ROUTES
========================*/
// Homepage
app.get("/",function(req,res){
    res.render("index");
});

app.get("/justme", isUserLoggedIn, function(req,res){
    res.render("justme");
});

app.post("/signup",function(req,res){
    User.register(new User({
        username: req.body.username,
        personalMsg : req.body.personalMsg,
        emailId : req.body.emailId
    }), req.body.password, function(err, user){
        if(err){
           console.log(err);
           res.redirect("signup")
        }else{
            passport.authenticate("local")(req, res, function(){
               res.redirect("/justme");
            });    
        }
    });
});

app.post("/login",passport.authenticate("local", {
    successRedirect : "/justme",
    failureRedirect: "/login"
}), function(req,res){
    
});

// AUTH ROUTES
app.get("/signup",function(req,res){
    res.render("signup");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});

// GET RESUME ROUTE
app.get('/resume', function(req, res){
  var tempFile="SHETTY_RESUME.pdf";
  fs.readFile(tempFile, function (err,data){
    if(err){
        console.log("Something went wrong\n"+err); 
    }else{
        res.contentType("application/pdf");
        res.send(data);          
    }
  });
});


function isUserLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// Start the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Portfolio is up!!");
});