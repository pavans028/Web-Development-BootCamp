var express = require("express");
var router  = express.Router({mergeParams:true});

//module dependancy
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// COMMENTS ROUTES

router.get("/new", middleware.isUserLoggedIn, function(req,res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            //console.log(campground);
            res.render("comments/add_new_comment",{campground:campground});
        }    
    });
    
});

router.post("/", middleware.isUserLoggedIn, function(req,res){
    
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            //console.log("Bodyy\n"+req.body.comment);
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log("Something went wrong!! \n"+err);
                }else{
                    // will add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    //console.log(comment);
                    campground.comments.push(comment);
                    Campground.create(campground, function(err, campground) {
                        if(err){
                            console.log("Something went wrong!! \n"+err);
                        }else{
                            req.flash("success","You commented on this post!");
                            res.redirect("/campgrounds/"+req.params.id);
                        }
                    });
                }
            });
        }    
    });
});

// Comment  EDIT
router.get("/:comment_id/edit", middleware.isUserAuthorizedToComment, function(req,res){
    Comment.findById(req.params.comment_id, function(err, comment) {
        if(err){
            res.redirect("back");
        }
        res.render("comments/edit", {campground_id: req.params.id, comment: comment});    
    });
});

// Comment Update
router.put("/:comment_id", middleware.isUserAuthorizedToComment, function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        }else{
            req.flash("success","You updated the comment!");
            res.redirect("/campgrounds/"+ req.params.id);
        }
    });
});

// COMMENT Destroy
router.delete("/:comment_id", middleware.isUserAuthorizedToComment, function(req,res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       }
       req.flash("success","You deleted the comment!");
       res.redirect("/campgrounds/"+ req.params.id);
    });
});


module.exports = router;