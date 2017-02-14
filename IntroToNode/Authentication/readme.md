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
