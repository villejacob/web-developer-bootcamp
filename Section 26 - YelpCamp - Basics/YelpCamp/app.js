var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://cspafford.files.wordpress.com/2011/04/salmon-creek-1.jpg"},        
    {name: "Yosemite", image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/09/main/yosemite-camping.jpg?itok=z-ahQLb1"},        
    {name: "Mountain Goat's Rest", image: "http://www.mountainphotography.com/images/large/201208_balsamGoats1.jpg"},    
    {name: "Salmon Creek", image: "https://cspafford.files.wordpress.com/2011/04/salmon-creek-1.jpg"},        
    {name: "Yosemite", image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/09/main/yosemite-camping.jpg?itok=z-ahQLb1"},        
    {name: "Mountain Goat's Rest", image: "http://www.mountainphotography.com/images/large/201208_balsamGoats1.jpg"},    
    {name: "Salmon Creek", image: "https://cspafford.files.wordpress.com/2011/04/salmon-creek-1.jpg"},        
    {name: "Yosemite", image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/09/main/yosemite-camping.jpg?itok=z-ahQLb1"},        
    {name: "Mountain Goat's Rest", image: "http://www.mountainphotography.com/images/large/201208_balsamGoats1.jpg"},    
    {name: "Salmon Creek", image: "https://cspafford.files.wordpress.com/2011/04/salmon-creek-1.jpg"},        
    {name: "Yosemite", image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/09/main/yosemite-camping.jpg?itok=z-ahQLb1"},        
    {name: "Mountain Goat's Rest", image: "http://www.mountainphotography.com/images/large/201208_balsamGoats1.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // Redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp started...");
});