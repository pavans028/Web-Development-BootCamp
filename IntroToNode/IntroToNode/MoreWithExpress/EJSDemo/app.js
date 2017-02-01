var express = require("express");
var app =  express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// ROUTE
app.get("/", function(req,res){
    //res.send("<h1>Welcome to more express assignments !!</h1>");
    res.render("home");
});

app.get("/posts", function(req,res){
    var posts = [
        {title:"Posty", author:"Susy"},
        {title:"Mycutiee", author:"Monks"},
        {title:"MyAdorable", author:"Donks"},
        {title:"Rustyy?", author:"Poogs"}
    ];
    res.render("posts", {posts:posts});
});

app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {
        thingsVariable : thing
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is ready !!!");
});

