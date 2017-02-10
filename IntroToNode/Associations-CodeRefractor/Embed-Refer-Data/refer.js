/*require variables*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/referDataDB");

//Post Model
var Post = require("./models/post.js");

// User model
var User = require("./models/user.js");

/*Separate Static data for both post and user to dump in the db*/

User.create({
    name:"Pavan",
    email:"pshetty4@hawk.iit.edu"
}, function(err, savedUser){
   if(err){
       console.log("Something went wrong!!\n"+err);
   } else{
       console.log("SavedUser-->\n"+savedUser);
   }
});

Post.create({
        postTitle:  "My node experience",
        postBody:   "Amazing!! Web development simplified!!"
}, function(err, savedPost){
   if(err){
       console.log("Something went wrong!!\n"+err);
   } else{
       console.log("SavedPost-->\n"+savedPost);
   }
});


/*Now after creating post, add it to user*/
Post.create({
            postTitle:  "My Bootstrap and Semantic experience - 2",
            postBody:   "Amazing!! Custom Css simplified!!-2"
}, function(err, savedPost){
   if(err){
      console.log("Something went wrong!!\n"+err);
   } else{
      User.findOne({
          name:"Pavan"
      }, function(err, userFound){
          if(err){
              console.log("Something went wrong!!\n"+err);
           } else{
                userFound.posts.push(savedPost);
                User.create(userFound, function(err, userFound){
                    if(err){
                        console.log("Something went wrong!!\n"+err);          
                    }else{
                        console.log("User with postID\n"+userFound);
                    }
                });
           }
      });       
   }
});


/* Now to get all posts of a user*/
User.findOne({name:"Pavan"}).populate("posts").exec(function(err, user){
    if(err){
        console.log("Something went wrong!!\n"+err);  
    }else{
        console.log("User-->"+user);
    }
});
