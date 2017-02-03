var express =  require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
    
app.set("view engine","ejs");

app.get("/", function(req,res){
    res.render("search_movies");
    //request("http://omdbapi.com/?s=star",)
});

app.get("/results", function(req,res){
    //res.send("Hello");
    var keyword = req.query.keyword_movie;
    var url = "http://omdbapi.com/?s=" + keyword;
    console.log(url);
    request(url,function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsed_data = JSON.parse(body);
            //console.log(parsed_data);
            //res.send(parsed_data["Search"][0]);
            res.render("search_results", {data:parsed_data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is ready!!") 
});