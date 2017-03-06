var express     = require("express"),
    passport    = require("passport");
var router  = express.Router({mergeParams:true});

//module dependancy
var User = require("../models/user");
var middleware = require("../middleware");

router.get("/", function(req,res){
   res.render("home");
});

// AUTH ROUTES
router.get("/signup", function(req, res) {
   res.render("signup"); 
});

router.post("/signup", function(req, res) {
   var newUser = new User({username:req.body.username});
   User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/signup");     
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success","Welcome to YelpCamp "+user.username);
            res.redirect("/campgrounds");         
        });
   });
});

router.get("/signin", function(req, res) {
    res.render("signin", {message:req.flash("error")}); 
});
router.post("/signin", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/signin"
}), function(req, res){});

router.get("/signout", function(req, res) {
    req.logout();
    req.flash("success","logged you out!")
    res.redirect("/campgrounds");
});

module.exports = router;