#Associations

##Intro to Associations
* Define associations
    * Its an idea of having associated data between two models.
    * Like campground and comments are linked.
* Discuss one:one, one:many, and many:many relationships
    * One-Many : One Campground, many comments on it.

## 2 different ways to connect 2 models with its associated data(mongoose).

## 1.Embedding Data
User
Post
* Define schemas and model for both user and post 
* And embed postSchema in userSchema
* var postSchema = new mongoose.Schema({
        postTitle:  String,
        postBody:   String
    });
* var userSchema = new mongoose.Schema({
        name:   String,
        email:  String,
        posts: [postSchema]
    });

## 2.Referencing Data
* User.findOne({name:"Pavan"}).populate("posts").exec(function(err, user){});
* var userSchema = new mongoose.Schema({
        name:   String,
        email:  String,
        posts: [{
            type:  mongoose.Schema.Types.ObjectId,
            ref:   "Post"
        }]
    });
* Here we just use the object id as a reference, not the entire post object


##Module.Exports
* Introduce module.exports - Done
    * it helps us to clean up the code
    * breaks the long file into different files, well organised.
* Move our models into seperate files - Done