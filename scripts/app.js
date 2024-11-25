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
let userInputColor;
let userInputBox;

// Functions

changeColorBtn.addEventListener("click", function () {
  switch (color) {
    case 1:
      userInputColor = "red";
      break;
    case 2:
      userInputColor = "blue";
      break;
    case 2:
      userInputColor = "purple";
      break;
    case 2:
      userInputColor = "brown";
      break;
    case 2:
      userInputColor = "yellow";
      break;
    default: 
        alert("Please Enter a valid color");
        break;
  }

     /*{
      document.getElementById(
        "boxTarget"
      ).style.backgroundColor = `${changeColor}`;
    }
  */
});



resetBoxBtn.addEventListener('click', fucntion() {
    userInputColor = "",
    userInputBox = ""
});

changeColorBtn.addEventListener("click", function () {
  boxTarget2.style.backgroundColor = "lightblue";
});
