var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// Add click listener to squares
		squares[i].addEventListener("click", function(){
			// Grab color of the clicked square
			var clickedColor = this.style.background;
			// Compare clicked to picked
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColors(clickedColor);
				h1.style.background = pickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color
	pickedColor = pickColor();
	// Change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// Change button and display text
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// Change the square colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){			
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

// // These two below are the same as the above block
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

function changeColors(color){
	// Loop through all squares
	for(var i = 0; i < squares.length; i++){
		// Change each color to match the given
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr = [];
	// Add num random colors to the array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	// Return the array
	return arr;
}

function randomColor(){
	// Pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}










