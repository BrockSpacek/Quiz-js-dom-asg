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
            boxTarget;
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

function boxColor(userInputColor){
    switch(userInputColor){
        case "red":
            
        case "blue":
            
        case "purple":
            
        case "brown":
        
        case "yellow":
            
        default:
            
            
    }
}

resetBtn.addEventListener("click", function(){
    boxTarget
    boxTarget2
    boxTarget3
    boxTarget4
    boxTarget5
    boxTarget6
    boxTarget7
    boxTarget8
 
})

/*

changeColorBtn.addEventListener("click", function () {
  boxTarget2.style.backgroundColor = "lightblue";
});

*/
