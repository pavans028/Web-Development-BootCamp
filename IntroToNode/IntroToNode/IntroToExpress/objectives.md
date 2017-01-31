#Introduction to Express

* What is a framework? How is it different from a library?
    Framework is jquery, Bootstrap, code that someone else wrote.. 
    Inversion of control, call a library, you are in control, while the framework the control is inverted.

* What is Express?  
    Framework, web development framework..
    
* Why are we using Express?
    Express is the most used framework, widely used, most number of donwloads in the npm repo, always a great reason to use this.
    lot of tutorials, most ppl contributing in the github.
    Heavyweight and lightweight framework. Express is lightweight. More powerful. Flexible(unopinionated)
    Expressjs.com// website to get more insight.

#Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
    google.com and hit enter, send an http request, send data along with request, response will be sent back.

* Routes: Routes are the code that are responsible for listening and receiving requests and deciding what to send back.

* Create our own simple Express app!
    Install npm-install express.
    lot of readymade code and riutes.
    Import the module express. 
    * First start the server, we have 'listen'
        app.listen(process.env.PORT, process.env.IP, function(){
            console.log("Server has started!!!");
        });
    *   process.env.PORT - for cloud9 port
    *   process.env.IP - for cloud9 IP
    app.get("/", function(req, res){
        res.send("Hi there! Welcome Pavan");
    });
    * 2 paramters (url and callback function what has to be done(req,res))
    * Req object contains all the info what the request is made with
    * Res object contains all the info what next has to be done

#NPM Init and Package.json

* Explain what the package.json file does
    * JSON -JavaScript Object Notation
    * Holds all the relavant metadata that a project needs.
    * package.json has a variable called 'dependencies', which tells us what other packages or libraries are needed 
    * for this installer to work properly. Instead of including all the packages, vic are of more size,
    * just tell those are needed and need to be downloaded with this express. 
    * (Denmark receipe example, pack all from here and send)
    * it has also has name, description, version
* Install npm-install express
* Use the `--save` flag to install packages
    * you already have one package.json file for your project and
    * if you have new installation just add --save, this will add it to the existing package.json
    * Check PackageJsonDemo
* Use `npm init` to create a new package.json
    * asks bunch of qs, like wahts the name, version(1.0.0), description, 
    * entrypoint is file where application starts, app.js or index.js
    * author: pavan


# More Routing!

* Show the `*` route matcher
    * Define the thing other thant the other routes written in code.
    * can be used for error message.
    * Order of routes matters. Dont put this at top.
* Write routes containing route parameters
    // single thing, just one after /r/
    // :subredditName is a param and so are :id and :title, but not the comments
    app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
        console.log(req.params);
        res.send("WELCOME TO THE COMMENTS PAGE!"); 
    });
    // { subredditName: 'soccer', id: '123', title: 'mufhfh' }

* Discuss route order
    * Order of routes matters. Dont put 'star' route matcher at top.