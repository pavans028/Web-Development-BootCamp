*   APIs (Connecting with other applications)
    *   Application Programming Interfaces - interfaces for code/computers to talk to one another.
    *   IFFTT, If this then that, way to connect APIs.
    *   ProgrammableWeb- best site to visit for all APIs.
    *   IoT(Internet of things), where you connect to a physical device through the API.


* JSON and XML
    * APIs dont respond with HTML, instead they send data in XML and JSON.
    * XML - Extended Markup language. 
        * Similar to HTML, but doesnot describe presentation like html does.
        * User defined tags.
    * JSON - Similar to JS objects, but only string.
        * Widely used bcoz it is similar to js.  
    * "JSONView" Chorme pluginn to view the JSON in browser from URL.

* Making API requests with Node. 
    *  Tool "curl" is used to make requests from command line.
    *  We can use "request" package to do the same.
    *  npm install require --save
    *  var request = require("request");
    *  request('http://www.google.com', function(error, response, body){
            if(!error && response.statusCode == 200){
                console.log(body) if JSON, you have to parse it using JSON.parse(body)
            }
        }
    
* Express Application which uses movie API.
    *   OMDb API, free movie database provides API
    *   Use www.omdbapi.com/?i=1234&s=harry&plot=full&tomatoes=true, to get the data in JSON
    *   Movie Search App.
    *   Make form with action as /results and methos as GET
    *   In app.js, we need to take the keyword from search_movies.ejs using req.query.[input_name]
    *   And concantenate the string and pass it to the request method.