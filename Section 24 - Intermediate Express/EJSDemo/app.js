var express = require("express");
var app = express();

// Include directory public
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    // home.ejs
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // love.ejs
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pup?", author: "Jacob"}
    ];
    // posts.ejs
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...");
});