var mongoose    =   require("mongoose");
var Campground  =   require("./models/campground"),
    Comment    =   require("./models/comment");

var campgrounds = [
    {
        name:       "Pictured Rocks",
        imageURL:   "http://www.thingstodointheup.com/wp-content/uploads/2012/08/hurricane-river-campsite.jpg",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


    },
    {
        name:"California Hunts",
        imageURL:"http://www.thingstodointheup.com/wp-content/uploads/2012/08/hurricane-river-shipwreck-sunset.jpg",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


    },
    {
        name:"Michigan Lakefront",
        imageURL:"http://www.thingstodointheup.com/wp-content/uploads/2012/08/au-sable-lighthouse2.jpg",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


    }
];

var seedDB = function(){
    // Initially will remove all the campgrounds and put new data.
    Campground.remove({}, function(err){
       if(err){
           console.log("Something went wrong!!\n"+err);
       }else{
           // once removed all old data, put the fresh one.
            campgrounds.forEach(function(campground){
                Campground.create(campground, function(err, campground){
                    if(err){
                        console.log("Something went wrong!!\n"+err);           
                    }else{
                        Comment.create({
                            text:"Campfire ground wasnt clean!!",
                            author:"Vaibhav"
                        },function(err,comment){
                            if(err){
                                console.log("Something went wrong!!\n"+err);
                            }else{
                                campground.comments.push(comment);
                                Campground.create(campground,function(err, campground){
                                    if(err){
                                        console.log("Something went wrong!!\n"+err);
                                    }else{
                                        console.log("Added with comments->"+campground);
                                    }
                                });    
                            }
                            
                        });
                    } 
                });    
            });
        } 
    });
};

module.exports = seedDB;