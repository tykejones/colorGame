var numSquares = 6;
//var colors = generateRandomColors(numSquares); **Refactored below**
var colors = [];
//var pickedColor = pickColor() **Refactored below**
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

//    **Refactored with above "var modeButtons"**
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
    //mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}
    
    


function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
        
          if(this.textContent === "Easy"){
            numSquares = 3;
          } else {
            numSquares = 6;
          }
          reset();
        });
    }
}

function setUpSquares(){
     for(var i = 0; i < squares.length; i++){
    //**Refactored with reset() funtion**
//    //add initial colors to squares
//    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
       //grab color of clicked square
        var clickedColor = this.style.background;
       
        //compare color to pickedColor (Checks if you win)
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "CORRECT!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "TRY AGAIN!"
        }
    });
}
}



function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new ransom color from array
    pickedColor = pickColor();
    //change display color to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
         squares[i].style.display = "block";   
         squares[i].style.background = colors[i];
        } else {
          squares[i].style.display = "none";
        }
   }
    h1.style.background = ("steelblue");
    
}



//    **Refactored with "function reset()" called below on reset button**
//easyBtn.addEventListener("click", function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares = 3;
//    //generate only 3 colors/squares
//    colors = generateRandomColors(numSquares);
//    //choose new "picked color/winner"
//    pickedColor = pickColor();
//    //display new "picked color/winner"
//    colorDisplay.textContent = pickedColor;
//    h1.style.background = ("steelblue");
//    messageDisplay.textContent = "";
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background = colors[i];
//        } else {
//          squares[i].style.display = "none";
//    }
//  }
//});
//    
//    
//     **Refactored with "function reset()" called below on reset button**
//hardBtn.addEventListener("click", function(){
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    //choose new "picked color/winner"
//    pickedColor = pickColor();
//    //display new "picked color/winner"
//    colorDisplay.textContent = pickedColor;
//    h1.style.background = ("steelblue");
//    messageDisplay.textContent = "";
//    for(var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//        squares[i].style.display = "block";
//   
//  }
//});


resetButton.addEventListener("click", function(){
    reset();
});
//       **Refactored above with "function reset()"**
//    //generate all new colors
//    colors = generateRandomColors(numSquares);
//    //pick a new ransom color from array
//    pickedColor = pickColor();
//    //change display color to match picked color
//    colorDisplay.textContent = pickedColor;
//    messageDisplay.textContent = "";
//    //change colors of squares
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//   }
//    h1.style.background = ("steelblue");
//    this.textContent = "New Colors";
//});



function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++)
    //change each color to match given color
        squares[i].style.background = color;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}


function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color & push into array
    }
    //return that array
    return arr;
}   

function randomColor (){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g +", " + b + ")";
}



























