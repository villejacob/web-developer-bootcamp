var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema for campground
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Yosemite", 
//         image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/09/main/yosemite-camping.jpg?itok=z-ahQLb1",
//         description: "Lots of granite, no water"
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("created campground");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX: Show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
            
        }
    });
});

// CREATE: Add new campground to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW: Show form to add new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new"); 
});

// SHOW: Show all information about a specific page
app.get("/campgrounds/:id", function(req, res){
    // Find the campground with the provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // Render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

// Start the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp started...");
});