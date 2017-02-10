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