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
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!