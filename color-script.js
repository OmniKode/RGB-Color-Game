/*Benefits of using let over var for declaring variables:
  - No hoisting allowed for the definition of the variable
  - No redeclaration of the same variable allowed
  */
/*numSquares is used for the reset button to not
always generate 6 new colors but instead 3 for easy and 
6 for hard mode - GENIUS!!!*/
let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.getElementsByTagName("h1")[0];
let buttonReset = document.getElementById("reset");
let modeButtons = document.getElementsByClassName("mode");

init();

buttonReset.addEventListener("click", function() {
	reset();
});

function init(){
	setupModes();
	setupSquares();
};

function reset() {  //Function Reset - resets the colors of the squares
	colors = generateRandomColors(numSquares);
	//pick a new winning color
	pickedColor = pickColor();
	//change the display to match the new pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of the 3 easy squares
	for (var i = 0; i < squares.length; i++) {
		//Reseting game, changing colors
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		};
    };

    h1.style.backgroundColor = "steelblue";
    buttonReset.textContent = "New Colors";
};
/*Function setupModes - adds event listeners to the mode buttons that
when clicked first remove the class selected for all the mode buttons and
add it to the clicked button; changes the number of squares for different
modes and than reseting the colors of the squares
*/
function setupModes(){  
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++){
				modeButtons[i].classList.remove("selected");
			};
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			/*if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			};*/
			reset();
		}); 
    };
};
/*Function setupSquares - adds event listeners to the squares(divs) that 
when clicked change the color of the square to black if incorrect or 
if correct change the colors of all the squares to the correct color;
sets up the initial colors of the squares by calling reset 
*/
function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
		//Adding event listeneres to squares
		squares[i].addEventListener("click", function() {
	        //Saving the clicked color to a variable 
	        let clickedColor = this.style.backgroundColor;
	        console.log(clickedColor);
	        //Comparing clicked color to picked color 
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				buttonReset.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			};
		});
		reset();
    };
};

function changeColors(color) {
	//Loop through all the squares again
	//Change the color of each square to match the correct one
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color; 
	}
};

function pickColor() {
	//Picks a random number to use it as an array key/index
	//Math.random() picks a random number between 0 and 1 all floats
	//Math.floor() selects and return only the whole part of the number(without the decimals)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//Create an empty color array
	var arr = [];
	//Create a for loop that will generate num random RGB colors
	for (var i = 0; i < num; i++) {
	//Get a random color and push it into the array
		arr.push(randomColor());
	};
	//Return that array
	return arr; 
};

function randomColor(){
//Pick a red from 0 to 255
//Pick a green from 0 to 255
//Pick a blue from 0 to 255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
	return rgb;
};

/*buttonEasy.addEventListener("click", function() {
	numSquares = 3;
	//generate 3 new easy random colors
	colors = generateRandomColors(numSquares);
	//pick a new winning color
	pickedColor = pickColor();
	//change the display to match the new pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of the 3 easy squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
	    } else {
	    	squares[i].style.display = "none";
	    }
    }
    this.classList.add("selected");
    buttonHard.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
});

buttonHard.addEventListener("click", function() {
	numSquares = 6;
	//generate 6 new hard random colors
	colors = generateRandomColors(numSquares);
	//pick a new winning color
	pickedColor = pickColor();
	//change the display to match the new pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of the 6 hard squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
    };
    this.classList.add("selected");
    buttonEasy.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
});*/




