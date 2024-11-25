// Input a number 1-8 to choose a box 
// Input a color from the 5 colors given to add it to the box
// Make change color button have a function that when the button is clicked, it takes in the user's number input and color input
// Using those inputs, the box that is tied to the number will have its background color changed to the user's inputed color by changing the css class.


// ID elements

let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBoxBtn = document.getElementById("resetBoxBtn");
let boxTarget = document.getElementById("boxTarget");
let boxTarget2 = document.getElementById("boxTarget2");
let boxTarget3 = document.getElementById("boxTarget3");
let boxTarget4 = document.getElementById("boxTarget4");
let boxTarget5 = document.getElementById("boxTarget5");
let boxTarget6 = document.getElementById("boxTarget6");
let boxTarget7 = document.getElementById("boxTarget7");
let boxTarget8 = document.getElementById("boxTarget8");

const validColors = ["red", "blue", "purple", "brown", "yellow"];
let userInputColor = "";
let userInputBox = 0;

// Functions

changeColorBtn.addEventListener("click", function () {
    userInputColor = changeColor.value;
    userInputColorcolor = userInputColor.toLowerCase();
    userInputBox = boxNumber.value; 

    switch(userInputBox){
        case "1":
            boxTarget.className = userInputColor + " col-3 text-center boxSize";
            break
        case "2":
            boxTarget2.className = userInputColor + " col-3 text-center boxSize";
            break
        case "3":
            boxTarget3.className = userInputColor + " col-3 text-center boxSize";
            break
        case "4":
            boxTarget4.className = userInputColor + " col-3 text-center boxSize";
            break
        case "5":
            boxTarget5.className = userInputColor + " col-3 text-center boxSize";
            break
        case "6":
            boxTarget6.className = userInputColor + " col-3 text-center boxSize";
            break
        case "7":
            boxTarget7.className = userInputColor + " col-3 text-center boxSize";
            break
        case "8":
            boxTarget8.className = userInputColor + " col-3 text-center boxSize";
            break
        default:
            alert("Choose a box 1-8");
            break;

  }
});




resetBoxBtn.addEventListener("click", function(){
    boxTarget.className = "col-3 text-center boxSize";
    boxTarget2.className = "col-3 text-center boxSize";
    boxTarget3.className = "col-3 text-center boxSize";
    boxTarget4.className = "col-3 text-center boxSize";
    boxTarget5.className = "col-3 text-center boxSize";
    boxTarget6.className = "col-3 text-center boxSize";
    boxTarget7.className = "col-3 text-center boxSize";
    boxTarget8.className = "col-3 text-center boxSize";

 
});


