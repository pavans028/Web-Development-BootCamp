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