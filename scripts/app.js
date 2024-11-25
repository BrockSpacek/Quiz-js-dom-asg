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

// Functions

changeColorBtn.addEventListener("click", function () {
  for (let i = 0; i < validColors.length; i++) {
    if (
      changeColor != "red" ||
      changeColor != "blue" ||
      changeColor != "purple" ||
      changeColor != "brownn" ||
      changeColor != "yellow"
    ) {
      changecolor = "";


    } else {
      document.getElementById(
        "boxTarget"
      ).style.backgroundColor = `${changeColor}`;
    }
  }
});


changeColorBtn.addEventListener("click", function() {
    document.getElementById("boxTarget2").style.backgroundColor = "lightblue";
  });