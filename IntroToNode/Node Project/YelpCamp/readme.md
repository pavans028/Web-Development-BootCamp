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

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!