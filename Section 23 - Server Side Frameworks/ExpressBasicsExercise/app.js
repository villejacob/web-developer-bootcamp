var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animalNoises = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "Meow",
        rooster: "Cockadoodledoo"
    }
    var animalName = req.params.animal.toLowerCase();
    var animalNoise = animalNoises[animalName];
    res.send("The " + animalName + " says '" + animalNoise + "'");
});

app.get("/repeat/:phrase/:repeat_count", function(req, res){
   var phrase = req.params.phrase;
   var repeated = Number(req.params.repeat_count);
   var annoying = "";
   for(var i = 0; i < repeated; i++){
       annoying += phrase + " ";
   }
   res.send(annoying);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (start the server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("c9 server has started");
});