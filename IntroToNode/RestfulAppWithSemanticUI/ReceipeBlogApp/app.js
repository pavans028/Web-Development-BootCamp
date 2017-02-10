var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    expressSanitizer= require("express-sanitizer") ,
    app             = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
mongoose.connect("mongodb://localhost/receipeapp");

// Make a schema for the receipe
var schemaForReceipe = new mongoose.Schema({
    title:          String,
    imageURL:       String,
    description:    String,
    createdOn:      {type: Date, default: Date.now}
}); 

var Receipe =  mongoose.model("Receipe",schemaForReceipe);

// Static Receipe
/*Receipe.create({
    title:          "First Static Test Receipe",
    imageURL:       "http://unsplash.com/photos/eDDQRAYKo7k",
    description:    "Mushroom gravye"
});*/

// default route
app.get("/", function(req,res){
    res.redirect("/receipes");
});

// home page route
app.get("/receipes", function(req,res){
    Receipe.find({}, function(err, allReceipes){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            res.render("index",{allReceipes:allReceipes});        
        }
    })
});

// create a new receipe
app.get("/receipes/new", function(req,res){
    res.render("new_receipe");
});

// post the details of the new receipe
app.post("/receipes", function(req,res){
    //read inputs and create receipe
    req.body.receipe.description = req.sanitize(req.body.receipe.description);
    //console.log(JSON.stringify(req.body.receipe));
    Receipe.create(req.body.receipe, function(err, receipe){
        if(err){
            console.log("Something went wrong!!\n"+err);
        }else{
            //redirect
            res.redirect("/receipes");   
        }
    });
    
});

// SHOW ROUTES
//Show one particular receipe
app.get("/receipes/:id",function(req,res){
    //req.params.id;
    Receipe.findById(req.params.id, function(err, each_receipe){
        if(err){
            console.log("Something wen wrong!!\n"+err);
        }else{
            res.render("each_receipe",{each_receipe:each_receipe});    
        }
    });
});

// EDIT ROUTES
// Edit the post and update it.
app.get("/receipes/:id/edit", function(req,res){
    Receipe.findById(req.params.id, function(err, edit_receipe){
        if(err){
            console.log("Something went wrong!!\n"+err);
            res.redirect("/receipes"); 
        }else{
            res.render("edit_receipe",{edit_receipe:edit_receipe});    
        }
    });
});

//UPDATE ROUTES
app.put("/receipes/:id", function(req,res){
    //res.send("update route");
    req.body.receipe.description = req.sanitize(req.body.receipe.description);
    //console.log(JSON.stringify(req.body.receipe));
    Receipe.findByIdAndUpdate(req.params.id,req.body.receipe, function(err){
        if(err){
            console.log("Something went wrong!!\n"+err);
            res.redirect("/receipes"); 
        }else{
            res.redirect("/receipes/"+req.params.id);    
        }
    });
});

//DELETE ROUTES
app.delete("/receipes/:id", function(req,res){
    //res.send(delete route");
    Receipe.findByIdAndRemove(req.params.id, function(err, edit_receipe){
        if(err){
            console.log("Something went wrong!!\n"+err);
            res.redirect("/receipes"); 
        }else{
            res.redirect("/receipes");    
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Asha's cookbook page is up !!"); 
});