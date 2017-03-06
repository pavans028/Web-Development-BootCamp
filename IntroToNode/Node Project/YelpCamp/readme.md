#YelpCamp

#v1
* npm init, install express, request, ejs, body-parser and all necessary packages.
* var express, app, set view engine and app.listen
** 

##Initial Setup
* Add Landing Page [app.get("/")] - Done
* Add Campgrounds Page that lists all campgrounds[app.get("/campgrounds")] - Done
    Each Campground has:
    * Name
    * Image
    * campgrounds = [{"name":"abc", imageURL:"xyz.jpg"}]

#Layout and Basic Styling
* Create our header and footer partials - Done.
* Add in Bootstrap - Done [Added CDN url from bootstrapcdn.com]

#Creating New Campgrounds
* Setup new campground POST route - Done - [app.post("/campgrounds")] 
* Add in body-parser  - Done - [app.use(body-parser).urlencoded({extended:true})]
* Setup route to show form - Done - [app.get(/campgrounds/new) and app.post(/campgrounds)] 
* Add basic unstyled form - Done - [ input type text and button added]

#Style the campgrounds page
* Add a better header/title - Done
    * Make a title look better using jumbotron, use <header>
* Make campgrounds display in a grid - Done
    * use the container class to put all together as one group
    * use the row class to use one complete row of a screen
    * use the col class to divide the no of the blocks needed in a row
        * col-lg, col-md, col-sm and no from 1-12.
    * Use thumbnail class and caption within it for much greater look.  
    * display:flex; flex-wrap:wrap; is used when you need to have proper grid irrespective of the image size.

#Style the Navbar and Form
* Add a navbar to all templates - Done
    * pull out from bootstrap page, open components and navbar in it.
    * use <nav> with class navbar to put all navigation to the page.
        * use div with containder class to group all things in one place.
        * use div with navbar-header for the homepage link (navbar-brand for href to Home)
        * use div with collapse to include the rest of the links.
        
* Style the new campground form - Done
    * use div with form-group for each form tags.
    * use div with form-control class for each elements


#V2 - No more static data, database driven

#Add Mongoose
* Install and configure mongoose -  Done
    * Notes in mongoDbExercises directory
* Setup campground model - Done.
    *   var campground_schema = new mongoose.Schema({
            name:String,
            imageURL:String
        });
    *   Model for each schemas
        var Campground = mongoose.model("Campground",campground_schema);

* Use campground model inside of our routes! - Done

#Show Page
* Review the RESTful routes we've seen so far - Done
* Add description to our campground model - (Change the schema) - Done
* Show db.collection.drop() - Delete all the old data - Done
* Add a show route/template - Done


#RESTFUL ROUTES

* name      url             verb    desc.
* ===============================================
* index                 /campgrounds      GET   Display a list of all campgrounds
* home                  /campgrounds/new  GET   Displays form to make a new campground
* add_new_campground    /campgrounds      POST  Add new campground to DB
* show_campground       /campgrounds/:id  GET   Shows info about one campground

#V3 - Refactor the existing code and Styling

#Refactor Mongoose Code
* Create a models directory - Done
* Use module.exports - Done
* Require everything correctly! - Done

#Add Seeds File
* Add a initialSeeds.js file - Done
* Run the seeds file every time the server starts - Done

#Add the Comment model!
* Make our errors go away! - Done
* Display comments on campground show page - Done (Using .populate().exec() for show method)

#Comment New/Create
* Discuss nested routes - "/campgrounds/:id/comments/new" and "/campgrounds/:id/comments" - Done
* Add the comment new and create routes - Done
* Add the new comment form - Done

#Style Show Page
* Add sidebar to show page - Done
    *  - col-md-9 and col-md-3 and list-group 
* Display comments nicely - Done 
    * Made custom css, app.css and placed it in public
    * app.use(express.static(__dirname+"/public"));
    * 
##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth - Done
    * express-session, passport, passport-local, passport-local-mongoose
* Define User model - Done
    * models/user
    * defined userSchema
    * Model for userSchema
    * userSchema.plugin("passport-local-mongoose")

##Auth Pt. 2 - Register
* Configure Passport - Done
    *   app.use(require("express-session")({
            secret      : "Secret signs the session ID",
            resave      :false,
            saveUninitialized : false
        }));
        app.use(passport.initialize());
        app.use(passport.session());
        passport.use(new localStrategy(User.authenticate()));
        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());

* Add register routes - Done
    * app.get("/signup", function(req, res) {
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

* Add register template - Done

##Auth Pt. 3 - Login
* Add login routes - Done
    * app.post("/signin", passport.authenticate("local", {
            successRedirect: "/campgrounds",
            failureRedirect: "/signin"
        }), function(req, res){});
 
* Add login template - Done

##Auth Pt. 4 - Logout/Navbar
* Add logout route - Done
    * app.get("/signout", function(req, res) {
        req.logout();
        res.redirect("/campgrounds");
      }) 
* Prevent user from adding a comment if not signed in
    * Middleware
    * function isUserLoggedIn(req,res,next){
            if(req.isAuthenticated()){
                return next();
            }
            res.redirect("/signin");
        }
* Add links to navbar - Done

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly - Done
    * Middleware to pass the user session info thru out the app
        app.use(function(req,res,next){
            req.locals.currentUser = req.user;
            next();
        }); 
    * ejs tags to control the visibility

##Refactor The Routes
* Use Express router to reoragnize all routes - Done
    * express.Router({mergeParams: true})
    * make routes as separate folder and move the routing code from app.js
    * require and use those in app.js

##Users + Comments
* Associate users and comments - Done
    * var commentSchema = new mongoose.Schema({
            text    :   String,
            author  :   {
                id:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User"
                }, 
                username:String
            }
        });
* Save author's name to a comment automatically. - Done
    *   comment.author.id = req.user._id;
        comment.author.username = req.user.username;
        comment.save();

##Users + Campgrounds
* Prevent an unauthorized user from creating a campground - Done
    * isUserLoggedIn() - Middleware
* Save username+id to newly created campground - Done
    * Same as  comment schema


# Editing Campgrounds
* Add Method-Override - Done
    * npm install method-override
    * require("method-override")
    * app.use(methodOverride("_method"))
* Add Edit Route for Campgrounds - Done
    * /campgrounds/:id/edit 
* Add Link to Edit Page - Done
    * /campgrounds/:id/?_method=PUT
* Add Update Route - Done
    * app.put() - /campgrounds/:id/

#Deleting Campgrounds
* Add Destroy Route - Done
    * /campgrounds/:id/?_method=DELETE
    * app.delete() - /campgrounds/:id/
* Add Delete button - Done

#Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds - Done
    * res.redirect("back"); - previous page
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons - 
    * <% if(currentUser && campground.author.id.equals(currentUser._id)){%>

#Editing Comments
* Add Edit route for comments - Done
* Add Edit button - Done
* Add Update route - Done

Campground Edit Route: <!--/campgrounds/:id/edit-->
Comment Edit Route:   <!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting Comments 
* Add Destroy route - Done
* Add Delete button - Done

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route:    /campgrounds/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments - Done
* User can only delete his/her comments - Done
* Hide/Show edit and delete buttons - Done
* Refactor Middleware - Done


#Adding in Flash!
* Demo working version - Done
* Install and configure connect-flash - Done
    * npm install connect-flash --save
    * add it before redirecting anywhere in the app
    * req.flash("error","You should be logged in first!"); in middleware
    * res.render("signin", {message:req.flash("error")}); 

#Add bootstrap alerts to header

* BOOTSTRAP NAV COLLPASE JS - Done
* Flash Messages - Done
* Refactor container div to header - Done
* Show/hide delete and update buttons - Done
* style login/register forms - Done
* Random Background Landing Page- Done
* Refactor middleware - Done
* change styling in show template - comment delete/update - Done
* UPDATE/DELETE CAMPGROUND - Done