var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Mirnda", "Justin", "Pierre", "Lily"];
app.get("/", function(req,res){
    /*res.send("This is homepage thru SEND.");*/
    res.render("home");
});

app.get("/friends", function(req,res){
    
    res.render("friends", {friends : friends}); 
});

app.post("/addFriend", function(req,res){
    //res.send("You have come to Post route!!"); 
    console.log(req.body);
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is ready to serve");
});