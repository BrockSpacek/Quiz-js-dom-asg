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
            boxTarget1;
            break
        case "2":
            boxTarget2;
            break
        case "3":
            boxTarget3;
            break
        case "4":
            boxTarget4;
            break
        case "5":
            boxTarget5;
            break
        case "6":
            boxTarget6;
            break
        case "7":
            boxTarget7;
            break
        case "8":
            boxTarget8;
            break
        default:
            alert("Choose a box 1-8");
            break;

  }
});

changeColor.addEventListener("keypress", (e) => {
  if (event.key === "Enter") {
    userInputColor = changeColor.value;
    console.log(userInputColor);
  }
});

boxNumber.addEventListener("keypress", (e) => {
  if (event.key === "Enter") {
    userInputBox = boxNumber.value;
    console.log(userInputBox);
  }
});

/*

changeColorBtn.addEventListener("click", function () {
  boxTarget2.style.backgroundColor = "lightblue";
});

*/
