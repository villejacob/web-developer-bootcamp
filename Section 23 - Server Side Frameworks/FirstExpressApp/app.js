var express = require("express");
var app = express();

// "/" >> "Hey!"
app.get("/", function(req, res){
    res.send("Hey!");
});

// "/bye" >> "goodbye"
app.get("/bye", function(req, res){
    res.send("goodbye");
});

// "/dog" >> "woof"
app.get("/dog", function(req, res){
    console.log("made a dog request");
    res.send("woof");
});

// Example to show how to use parameters
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    // console.log(req.params);
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " COMMENTS PAGE");
});

// Default message for all other routes
app.get("*", function(req, res){
    res.send("You are an asterisk");
});

// Tell Express to listen for requests (start the server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("c9 server has started");
});