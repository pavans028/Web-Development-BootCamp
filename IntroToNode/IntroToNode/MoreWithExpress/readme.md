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
    * <h1>You fell in love with: <%= thingsVariable%></h1>
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