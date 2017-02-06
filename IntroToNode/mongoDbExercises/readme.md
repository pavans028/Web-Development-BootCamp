#Databases

##Intro to Databases
* What is a database? 
    * A collection of information/data
    * Has an interface and provides us a platform to interact with the data.
* SQL(relational) vs. NoSQL(non-relational  
    * SQL databases are tabular and are flat.
    * Here everything is enclosed in a bracket and we have BSON(Binary Javascript Object Notation.)
    * NO SQL are not the best always, but in terms of FLEXBILITY, those are the best.
    * Document oriented databases.

#Intro to MongoDB
* What is MongoDB? Why are we using it?
    * MongoDB is pretty famous with Node and Express. This adds upto MEAN Stack.
* Let's Install It!
    * mkdir data -" This is where the mongodb stores all the application data."
    * echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod - "Configure it db path and IP"
    * chmod a+x mongod = "Make it executable"
* Now that it is installed lets start daemon and keep it running for the rest of project.
    * start it using "./mongod" and open up a new tab and do the rest of the project.

#Our First Mongo Commands
* mongod ( Daemon )
    * Starts the mongo Server on some PORT and IP.
* mongo
    * Opens up the MOngoDB shell or a console. Used to debug and test.
* help
    * Help wil give basic list of all commands.
* show dbs
    * shows all the databases in the data directory. Default has admin and local.
* use
    * Creates a new database, if already present uses the same. "use demoDB" 
    * and only after you add the data to it, it will be listed in the show dbs 
* collection
    * Object notation of a data to be stored like Dogs.
    * show collections can be used to list all collections
* insert
    * inserts the data into the databases.
    * db.dogs.insert({});
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * insert - will insert the data sent in params(It shudd BSON).
* find
    * finds the data in the databases.
    * db.dogs.find();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * find - will return all, if no data sent in params.
        * db.dogs.find({name:"Rocky"})
 
* update
    * updates the data in the databases.
    * db.dogs.update();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * update - two types
            * db.dogs.update({param 1(keyword to select one)},{param 2(Values to be set)}) //Type 1
                * replaces the content with the new content. (doesnt set the only key)
                * db.dogs.update({name:"Rocky"},{isCute:"True"})
                * > db.dogs.find()
                  { "_id" : ObjectId("58979ad19d69f2a57b019efd"), "isCute" : "True" }
            * db.dogs.update({param 1(keyword to select one)},{$set :{ param 2(Values to be set)} }) //Type 2
                * replaces the content with the new content. (doesnt set the only key)
                * db.dogs.update({name:"Rocky"},{$set:{name:"Rocky",isCute:"True", breed:"lab"}})
                * > db.dogs.find()
                  { "_id" : ObjectId("58979e419d69f2a57b019efe"), "name" : "Rocky", "breed" : "lab", "isCute" : "True" }
* remove
    * removes the data in the databases.
    * db.dogs.remove();
        * db - current db in use.
        * dogs -  collection(data structure), will create one.
        * find - will remove all, if no limit is set.
        * db.dogs.remove({name:"Rocky"}) or db.dogs.remove({name:"Rocky"}).limit(1) 

* Be sure to shut down your mongod server each time you're done working.
    You can do this with ctrl + c
    If you leave it running then Cloud 9 could time out and cause mongo to crash. If this happens, try the following to repair it.
    From the command line, run:
    cd ~
    ./mongod --repair

#Mongoose
* What Is Mongoose? Why are we using it?
    * Elegant mongodb object modelling for node.js.
    * Mongoose is a tool/package that we will download from npm that helps to interact with Mongodb inside of our javascript files.
    * npm install mongoose
* Interact with a Mongo Database using Mongoose
    * var mongoose = require("mongoose");
    * mongoose.connect();
    * mongoose.Schema() to make a schema
    * Cat = mongoose.model() to make a model ready for schema
    * And then CRUD operations
        * Cat.create(), .save(), .find(), .remove()













USERS TABLE
id | name  |  age  |  city
-------------------------
1  | Tim   |  57   |  NYC           
2  | Ira   |  24   |  Missoula 
3  | Sue   |  40   |  Boulder


COMMENTS TABLE
id |       text  
--------------------------
1  | "lol"
2  | "Come visit Montana!"   
3  | "I love puppies!!!"
4  | "Seriously Montana is great!"


USER/COMMENTS JOIN TABLE
userId  |  commentId
---------------------------
   1         3
   2         2
   2         4
   3         1
   
   
   
==========================
A NON-RELATIONAL DATABASE:
==========================
{
  name: "Ira",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favColor: "purple"
}


{
  name: "Tammy",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favFood: "Ribeye"
}






