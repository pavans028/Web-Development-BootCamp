var express = require("express");
var app = express();


// "/" => "Hi there! Welcome Pavan"
app.get("/", function(req, res){
    res.send("Hi there! Welcome Pavan");
});

// "/bye" => "Goodbye Pavan!"
app.get("/bye", function(req, res){
    res.send("Goodbye Pavan!"); 
});

// "/cat" => "MEOW!"
app.get("/cat", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /CAT!!!")
    res.send("MEOW MEOW!"); 
});

// single thing, just one after /r/
// :subredditName is a param
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!"); 
});

// single thing, just one after /r/
// :subredditName is a param
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!"); 
});

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!"); 
});


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
