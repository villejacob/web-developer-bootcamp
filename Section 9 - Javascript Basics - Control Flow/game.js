// Create secretNumber
var secretNumber = 4;

// Ask user for a guess
var stringGuess = prompt("Guess:");
var guess = Number(stringGuess);

// Check if it is right
if (guess === secretNumber){
	alert("Correct!");
}
else if (guess > secretNumber){
	alert("Too high");
}
else{
	alert("Too low");
}