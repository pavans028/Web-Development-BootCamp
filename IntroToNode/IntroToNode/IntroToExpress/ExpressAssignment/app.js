var express = require("express")

var app = express();

app.get("/",function(req,res){
    res.send("Hello Fellas !!! Welcome to express first assignment");
});

app.get("/speak/:animal", function(req,res){
    var sound = {
        cow:"Ambyaaaa",
        dog:"Bow bow",
        pig:"hyrrraaannn"
    };
    var animal = req.params.animal.toLowerCase();
    res.send("The "+animal+" says '"+sound[animal]+"'");
});

app.get("/repeat/:word/:times", function(req, res) {
    var finalToPrint = "";
    var noOfTimes = Number(req.params.times);
    // or parseInt(req.params.times)
    var word = req.params.word;
    for(var i=0;i<noOfTimes;i++){
        finalToPrint += word + " ";
    }
    res.send(finalToPrint);
});

app.get("*", function(req, res) {
    res.send("Page not found!!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started at port::>"+process.env.PORT);
});
