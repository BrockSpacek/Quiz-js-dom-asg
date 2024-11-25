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
  switch (userInputColor) {
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

  switch (userInputBox) {
    case 1:
      userInputBox = "1";
      boxTarget.style.backgroundColor = userInputColor;
      break;
    case 2:
      userInputBox = "2";
      boxTarget2.style.backgroundColor = userInputColor;
      break;
    case 3:
      userInputBox = "3";
      boxTarget3.style.backgroundColor = userInputColor;
      break;
    case 4:
      userInputBox = "4";
      boxTarget4.style.backgroundColor = userInputColor;
      break;
    case 5:
      userInputBox = "5";
      boxTarget5.style.backgroundColor = userInputColor;
      break;
    case 6:
      userInputBox = "6";
      boxTarget6.style.backgroundColor = userInputColor;
      break;
    case 7:
      userInputBox = "7";
      boxTarget7.style.backgroundColor = userInputColor;
      break;
    case 8:
      userInputBox = "8";
      boxTarget8.style.backgroundColor = userInputColor;
      break;
    default:
      alert("invalid");
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
