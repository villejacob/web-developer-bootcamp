var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    mood: String
});

var Cat = mongoose.model("Cat", catSchema);

// // Create instance of Cat
var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    mood: "Evil"
});

// // Save the Cat instance to the database, check for error
george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    } else {
        console.log(cat + "saved to the database");
    }
});

// Better way to do new and save at once
Cat.create({
    name: "Sparkles",
    age: 12,
    mood: "Sassy"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// Retrieve all of the cats from the DB
Cat.find({}, function(err, cats){
    if(err){
        console.log(err);
    } else {
        console.log(cats);
    }
});