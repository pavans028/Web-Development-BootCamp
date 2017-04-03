# Web-Development-BootCamp
2016 Summer break, #Bootstrap #Node.js #mongoDB. Craving to learn new things.

My Portfolio URL: https://pavanshetty.herokuapp.com/

#Using Node

* Interact with Node Console (node)
    * Node u type and u get the node console to execute the JS code.
    * Ctrl+c twice to come out of the node console
* Run a file with node 
    * (node <filename>)

* Earlier, you needed browser to execute the javascript code.
* js was only front end.
* Write js file link it to HTML and open them up in browser.
* On the server side - Node js
    *Trending (Smallest reason)
    *Javascript, learn only one language.
    
#Intro to NPM

* Define NPM (Node Package Manager)
* Explain why NPM is awesome
    - Ecosystem of open source libraries in the world(Great Libraries)
    - It is the package manager for javascript, centralized repo
    - Get all the dependencies required for your project, No need CDN url, have command line tool to install easily.. npm install **
    - Express, passport, mongoose, morgan, ejs, body-parser
* Intro the packages we will end up using

#Installing and Using Packages

* Use `npm install` to install a package
    - New "node-modules/" will be a new folder created after the installation. All packages will reside in it.
* Use `require()` to include a package
    - Written at the top of the file

#Introduction to Express

* What is a framework? How is it different from a library?
    Framework is jquery, Bootstrap, code that someone else wrote.. 
    Inversion of control, call a library, you are in control, while the framework the control is inverted.

* What is Express?  
    Framework, web development framework..
    
* Why are we using Express?
    Express is the most used framework, widely used, most number of donwloads in the npm repo, always a great reason to use this.
    lot of tutorials, most ppl contributing in the github.
    Heavyweight and lightweight framework. Express is lightweight. More powerful. Flexible(unopinionated)
    Expressjs.com// website to get more insight.

#Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
    google.com and hit enter, send an http request, send data along with request, response will be sent back.

* Routes: Routes are the code that are responsible for listening and receiving requests and deciding what to send back.

* Create our own simple Express app!
    Install npm-install express.
    lot of readymade code and riutes.
    Import the module express. 
    * First start the server, we have 'listen'
        app.listen(process.env.PORT, process.env.IP, function(){
            console.log("Server has started!!!");
        });
    *   process.env.PORT - for cloud9 port
    *   process.env.IP - for cloud9 IP
    app.get("/", function(req, res){
        res.send("Hi there! Welcome Pavan");
    });
    * 2 paramters (url and callback function what has to be done(req,res))
    * Req object contains all the info what the request is made with
    * Res object contains all the info what next has to be done

#NPM Init and Package.json

* Explain what the package.json file does
    * JSON -JavaScript Object Notation
    * Holds all the relavant metadata that a project needs.
    * package.json has a variable called 'dependencies', which tells us what other packages or libraries are needed 
    * for this installer to work properly. Instead of including all the packages, vic are of more size,
    * just tell those are needed and need to be downloaded with this express. 
    * (Denmark receipe example, pack all from here and send)
    * it has also has name, description, version
* Install npm-install express
* Use the `--save` flag to install packages
    * you already have one package.json file for your project and
    * if you have new installation just add --save, this will add it to the existing package.json
    * Check PackageJsonDemo
* Use `npm init` to create a new package.json
    * asks bunch of qs, like wahts the name, version(1.0.0), description, 
    * entrypoint is file where application starts, app.js or index.js
    * author: pavan


# More Routing!

* Show the `*` route matcher
    * Define the thing other thant the other routes written in code.
    * can be used for error message.
    * Order of routes matters. Dont put this at top.
* Write routes containing route parameters
    // single thing, just one after /r/
    // :subredditName is a param and so are :id and :title, but not the comments
    app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
        console.log(req.params);
        res.send("WELCOME TO THE COMMENTS PAGE!"); 
    });
    // { subredditName: 'soccer', id: '123', title: 'mufhfh' }

* Discuss route order
    * Order of routes matters. Dont put 'star' route matcher at top.

#Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
    * Use it instead of res.send()
    * Use it for a file
* Explain what EJS is and why we use it
    * Embedded JavaScript
    * You need to rename the files with .ejs extension
    * Express will look for EJS package to render EJS
    * npm install ejs --save
    * All set to go !!
* Pass variables to EJS templates
    * app.get("/fallinlovewith/:thing", function(req,res){
        var thing = req.params.thing;
            res.render("love.ejs", {
                thingsVariable : thing
            });
        });
    * You fell in love with: <%= thingsVariable%>
        <% if(thingsVariable.toLowerCase() === "rusty"){ %>
            <p>RUSTY IS THE BEST !!</p>
        <% } else {%>
            <p>BAD CHOICE !!</p>
        <% }%>
    *
    * <%= %> is used in ejs
    * And both the variable name shudd match.
    * This helps in having dynamic templates
    * 3 sets of tags in EJS
        * <%= %> value is returned and added to the HTML
        * <% %> logic statements are done using this, 
            nothing to print in the HTMl just conditions should be evaluated
        * <%- %>

#EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file
    * <h4> Using forEach !!!</h4>
        <% posts.forEach(function(post){ %>
            <li><strong><%= post.title %> </strong> - <%= post.author %></li>
        <% }); %> 

#Styles And Partials

* Show how to properly include public assets
    * app.use(express.static("public")); // in app.js
    * <link rel="stylesheet" href="app.css"> // can be used without public/app.css
* Properly configure our app to use EJS
* Use partials to dry up our code!
    * app.set("view engine", "ejs"); and use just home, love, posts instead of home.ejs etc
    * make a folder 'partials' in views and make templates called header.ejs and footer.ejs
    * And put the content doctype, html, head, title, and close tags.
    * and '<% include partials/header %>' put this in every file at the top
    * and <% include partials/footer %> at the bottom.
    * And in css line, make it to /app.css instead of app.css, to make it to look in root directory
    * 


#Post Requests!!!

* Write post routes, and test them with Postman
    *   app.post("/addFriend", function(req,res){});
    *   .post will make it as a post route
    *   Postman enter the url with the route and select POST and send !!
    *   
* Use a form to send a post request
    *   Include a form in ejs file to submit it to the route along with the data
    *   <form action="/addFriend" method="post">   

* Use body parser to get form data
    * npm install body-parser --save
    * var bodyParser = require("body-parser");
    * app.use(bodyParser.urlencoded({extended: true}));
    * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    * Express.js will not parse the req body to Javascript, for that we need this.
    * var newfriend = req.body.newfriend; // this "newfriend" should be the name of input tag.
* res.redirect("/routename")
    * it is used to switch within the routes. 	

#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
    * Rest - Representational State Transfer
    * Rest is a just a pattern/convention/architecture 
    * and way of mapping http routes and CRUD.
* List all 7 RESTful routes and Show example of RESTful routing in practice
    <img src="7 diff rest routes.jpg">
    * Index, New, Create, Show, Edit, Update, Destory

##Semantic UI
* Very similar to Bootstrap for CSS and javascript.
* Can include just one component 
* unlike Bootstrap where the whole library has to be imported.
* <%- runs the code inside it ex. <strong> %>

##Blog Index
* Setup the Blog App - Done
* Create the Blog model - Done
* Add INDEX route and template - Done
    * Blog.find(callback); 

##Basic Layout
* Add Header and Footer Partials - Done
* Include Semantic UI - Done using the CDN
* Add Simple Nav - Done
    * "ui fixed inverted menu", "ui container", "header item", "item"  

##Putting the C in CRUD
* Add NEW route - Done
* Add NEW template - Done
* Add CREATE route - Done
* Add CREATE template - Done
    * form tag with class="ui form" and div for each input with class="field"

##SHOWtime
* Add Show route - Done
* Add Show template - Done
    * ui top attached- puts border
    * Blog.findById(id, callback);
* Add links to show page - Read more with :id - Done
* Style show template - Done

##Edit/Update
* Add Edit Route - Done
* Add Edit Form - Done
* Add Update Route - Done
    * PUT method in HTML5 form is not supported.
    * action="/blogs/<%=+++%>?_method=PUT" method="POST"
    * npm install method-overide
    * app.use(methodOverride("_method")) will make it to treat as a PUT route
    * Blog.findByIdAndUpdate(id, newObject, callback);
* Add Update Form - Done
* Add Method-Override - Done

##DESTROYYYYYY
* Add Destroy Route - Done
* Add Edit and Destroy Links - Done
    * Blog.findByIdAndUpdate(id, newObject, callback);

##Final Updates
* Sanitize blog body
    * npm install express-sanitizer --save
    * var expressSanitizer = require("express-sanitizer");
    * app.use(expressSanitizer());
    * It is used to filter the script tags used in the input field.
* Style Index - Done
* Update REST Table - Done	

#Databases

##Intro to Databases
* What is a database? 
    * A collection of information/data
    * Has an interface and provides us a platform to interact with the data.
* SQL(relational) vs. NoSQL(non-relational  
    * SQL databases are tabular and are flat.
    * Here everything is enclosed in a bracket and we have BSON(Binary Javascript Object Notation.)
    * NO SQL are not the best always, but in terms of FLEXBILITY, those are the best.
    * Document oriented databases.

#Intro to MongoDB
* What is MongoDB? Why are we using it?
    * MongoDB is pretty famous with Node and Express. This adds upto MEAN Stack.
* Let's Install It!
    * mkdir data -" This is where the mongodb stores all the application data."
    * echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod - "Configure it db path and IP"
    * chmod a+x mongod = "Make it executable"
* Now that it is installed lets start daemon and keep it running for the rest of project.
    * start it using "./mongod" and open up a new tab and do the rest of the project.

#Our First Mongo Commands
* mongod ( Daemon )
    * Starts the mongo Server on some PORT and IP.
* mongo
    * Opens up the MOngoDB shell or a console. Used to debug and test.
* help
    * Help wil give basic list of all commands.
* show dbs
    * shows all the databases in the data directory. Default has admin and local.
* use
    * Creates a new database, if already present uses the same. "use demoDB" 
    * and only after you add the data to it, it will be listed in the show dbs 
* collection
    * Object notation of a data to be stored like Dogs.
    * show collections can be used to list all collections
* insert
    * inserts the data into the databases.
    * db.dogs.insert({});
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * insert - will insert the data sent in params(It shudd BSON).
* find
    * finds the data in the databases.
    * db.dogs.find();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * find - will return all, if no data sent in params.
        * db.dogs.find({name:"Rocky"})
 
* update
    * updates the data in the databases.
    * db.dogs.update();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * update - two types
            * db.dogs.update({param 1(keyword to select one)},{param 2(Values to be set)}) //Type 1
                * replaces the content with the new content. (doesnt set the only key)
                * db.dogs.update({name:"Rocky"},{isCute:"True"})
                * > db.dogs.find()
                  { "_id" : ObjectId("58979ad19d69f2a57b019efd"), "isCute" : "True" }
            * db.dogs.update({param 1(keyword to select one)},{$set :{ param 2(Values to be set)} }) //Type 2
                * replaces the content with the new content. (doesnt set the only key)
                * db.dogs.update({name:"Rocky"},{$set:{name:"Rocky",isCute:"True", breed:"lab"}})
                * > db.dogs.find()
                  { "_id" : ObjectId("58979e419d69f2a57b019efe"), "name" : "Rocky", "breed" : "lab", "isCute" : "True" }
* remove
    * removes the data in the databases.
    * db.dogs.remove();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * find - will remove all, if no limit is set.
        * db.dogs.remove({name:"Rocky"}) or db.dogs.remove({name:"Rocky"}).limit(1) 

* Be sure to shut down your mongod server each time you're done working.
    You can do this with ctrl + c
    If you leave it running then Cloud 9 could time out and cause mongo to crash. If this happens, try the following to repair it.
    From the command line, run:
    cd ~
    ./mongod --repair

#Mongoose
* What Is Mongoose? Why are we using it?
    * Elegant mongodb object modelling for node.js.
    * Mongoose is a tool/package that we will download from npm that helps to interact with Mongodb inside of our javascript files.
    * npm install mongoose
* Interact with a Mongo Database using Mongoose
    * var mongoose = require("mongoose");
    * mongoose.connect();
    * mongoose.Schema() to make a schema
    * Cat = mongoose.model() to make a model ready for schema
    * And then CRUD operations
        * Cat.create(), .save(), .find(), .remove()

# API

*   APIs (Connecting with other applications)
    *   Application Programming Interfaces - interfaces for code/computers to talk to one another.
    *   IFFTT, If this then that, way to connect APIs.
    *   ProgrammableWeb- best site to visit for all APIs.
    *   IoT(Internet of things), where you connect to a physical device through the API.


* JSON and XML
    * APIs dont respond with HTML, instead they send data in XML and JSON.
    * XML - Extended Markup language. 
        * Similar to HTML, but doesnot describe presentation like html does.
        * User defined tags.
    * JSON - Similar to JS objects, but only string.
        * Widely used bcoz it is similar to js.  
    * "JSONView" Chorme pluginn to view the JSON in browser from URL.

* Making API requests with Node. 
    *  Tool "curl" is used to make requests from command line.
    *  We can use "request" package to do the same.
    *  npm install require --save
    *  var request = require("request");
    *  request('http://www.google.com', function(error, response, body){
            if(!error && response.statusCode == 200){
                console.log(body) if JSON, you have to parse it using JSON.parse(body)
            }
        }
    
* Express Application which uses movie API.
    *   OMDb API, free movie database provides API
    *   Use www.omdbapi.com/?i=1234&s=harry&plot=full&tomatoes=true, to get the data in JSON
    *   Movie Search App.
    *   Make form with action as /results and methos as GET
    *   In app.js, we need to take the keyword from search_movies.ejs using req.query.[input_name]
    *   And concantenate the string and pass it to the request method.
		
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
		
#Authentication

##Intro to Auth
* Provide login to application.
* Using Passport.js because
    * lots of apps use it.
    * passportjs.org website

* What tools are we using?
    * Passport is an authentication middleware for Node.js.
        * Can be used as a traditional username and password
        * Or any services like fb, twitter and google. 
    * Passport Local - traditional username and password authentication.
    * Passport Local Mongoose - package to implement passport local thru Mongo

* Walk through auth flow
* Discuss sessions
    * Express-Session
    * HTTP are stateless protocol, means doesnt carry information about the
    * previous request. One time trasaction.
    * So we have Sessions which make HTTP stateful. Can have state.


#Auth CodeAlong Part 1
* Set up folder structure - Done
* Install needed packages - Done
    * npm install express-session --save
    *  npm install passport passport-local passport-local-mongoose --save
* Add root route and template - Done
* Add secret route(For succesful login only) and template - Done

#Auth CodeAlong Part 2
* Create User model
    * var userSchema =  new mongoose.Schema({
        username : String,
        password : String
    });
    * userSchema.plugin(passportLocalMongoose)

* Configure passport
    * app.use(passport.initialize());
    * app.use(passport.session());

* User.serializeUser and User.deserializeUser
    * these are really important.
    * To take data from session that is encoded and decode it and 
    * send it back to the session by encoding it again.

#Auth CodeAlong Part 3
* Add Register routes
    * Pass the password separately so that it hashes the password.
* Add Register form
    * User.register(new User({username: req.body.username}), req.body.password,
    * function(err, user){ }));

#Auth CodeAlong Part 4
* Add Login routes
    * passport.use(new passportLocal(User.authenticate())); 
* Add Login form
    * app.post("/login",passport.authenticate("local", {
            successRedirect : "/justme",
            failureRedirect: "/login"
        }), function(req,res){
            
        });

#Auth CodeAlong Part 5
* Add Logout Route
    * app.get("/logout",function(req,res){
            req.logout();
            res.redirect("/");
        });
* Add isLoggedIn middleware
    * function isUserLoggedIn(req, res, next){
            if(req.isAuthenticated()){
                return next();
            }
            res.redirect("/login");
        }
    * Add additional parameter to
        * app.get("/justme", isUserLoggedIn, function(req,res){
                res.render("justme");
            });

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

## Users + Comments
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

## Users + Campgrounds
* Prevent an unauthorized user from creating a campground - Done
    * isUserLoggedIn() - Middleware
* Save username+id to newly created campground - Done
    * Same as  comment schema



