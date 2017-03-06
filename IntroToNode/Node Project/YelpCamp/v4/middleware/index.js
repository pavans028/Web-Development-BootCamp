var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

// Middleware to check for User session.
middlewareObj.isUserLoggedIn = function (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You should be logged in first!");
    res.redirect("/signin");
}

// For campground operations authorization

// Middleware to check user authorization for campgrounds.
middlewareObj.isUserAuthorized = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, campground){
            if(err){
                console.log("Something went wrong in isUserAuthorized\n"+err);
                res.redirect("back");
            }
            else{
                //user owns the campground?
                if(campground.author.id.equals(req.user._id)){
                    next();    
                }else{
                    req.flash("error","You are not authorized to do that!");
                    res.redirect("back");
                }
            }
        });
    }else{
        req.flash("error","You should be logged in first!");
        res.redirect("back");
    }
};

// For comment operations authorization

// Middleware to check user authorization for comments.
middlewareObj.isUserAuthorizedToComment = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, comment){
            if(err){
                console.log("Something went wrong in isUserAuthorizedToComment\n"+err);
                res.redirect("back");
            }
            else{
                //user owns the campground?
                if(comment.author.id.equals(req.user._id)){
                    next();    
                }else{
                    req.flash("error","You are not authorized to do that!");
                    res.redirect("back");
                }
            }
        });
    }else{
        req.flash("error","You should be logged in first!");
        res.redirect("back");
    }
};


module.exports = middlewareObj;
