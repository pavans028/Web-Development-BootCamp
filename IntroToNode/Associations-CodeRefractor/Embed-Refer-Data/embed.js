/*require variables*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/embedDataDB");

/* Define schemas and model for both user and post*/
//Post schema
var postSchema = new mongoose.Schema({
    postTitle:  String,
    postBody:   String
});

//Post Model
var Post = mongoose.model("Post",postSchema);

// User schema
var userSchema = new mongoose.Schema({
    name:   String,
    email:  String,
    posts: [postSchema]
});
// User model
var User = mongoose.model("User",userSchema);

/*Static data to dump in the db*/

User.create({
    name:"Pavan",
    email:"pshetty4@hawk.iit.edu",
    posts:[{
        postTitle:  "My node experience",
        postBody:   "Amazing!! Web development simplified!!"
    }]
}, function(err, savedUser){
   if(err){
       console.log("Something went wrong!!\n"+err);
   } else{
       console.log(savedUser);
   }
});

/*Now find user pavan and add one more post to user*/
User.findOne({name:"Pavan"}, function(err, userFound){
    if(err){
        console.log("Something went wrong!!\n"+err);
    }else{
        //console.log("USER FOUND-->\n"+userFound);
        userFound.posts.push({
            postTitle:  "My Bootstrap and Semantic experience",
            postBody:   "Amazing!! Custom Css simplified!!"
        });
        User.create(userFound, function(err, userFound){
            if(err){
                console.log("Something went wrong!!\n"+err);
            }else{
                console.log("USER FOUND-->\n"+userFound);
            }
        });
    }
});