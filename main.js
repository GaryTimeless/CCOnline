const ColorOfFigure = {
  RED: "RED",
  WHITE: "WHITE",
  BLACK: "BLACK",
  BLUE: "BLUE",
  YELLOW: "YELLOW",
};

const Field = [];

var GameObjectPosition = {
  RED: 0,
  WHITE: 0,
  BLACK:0,
  BLUE:0,
  YELLOW:0
}
const AlreadyMove = [];
var i = 1;

function prepaireGameboardField() {
  for (let index = 1; index < 21; index++) {
    let FieldValue = {
      left: "",
      top: "",
    };
    let element = document.querySelector(".button" + index);
    let style = getComputedStyle(element);
    FieldValue.left = style.left;
    FieldValue.top = style.top;

    // console.log(FieldValue);
    Field[index] = FieldValue;
  }
}

window.onload = function () {
  console.log("on load WINDOW start");
  prepaireGameboardField();
  console.log(" prepaireGameboardField FINISHED");
};

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }



function DiceAction() {
  
  if(AlreadyMove.length<5){
    // Eine Zahl zwischen 1-3
    let n = Math.floor(1+Math.random() * 3)
    
    do {
      // SUCHE EINE RANDOM FARBE
      var currentColor = chooseColor();
      
      var AlreadyMoveCHECK = checkAlreadyMove(currentColor)
    
      
    }
  while (AlreadyMoveCHECK)
  
  
  
  document.getElementById("Dice_Text").innerHTML =
    "You through a: " + n + " with color " + "\n" + currentColor;
  
  CurrentColorObjectMove(currentColor,n);

  }else{

    document.getElementById("Dice_Text").innerHTML =
    "ALL OBJECTS MOVED, \nNEW TURN"
    return;
  }

}



function chooseColor() {
  var rand = Math.floor(Math.random() * Object.keys(ColorOfFigure).length);
  var randColorValue = ColorOfFigure[Object.keys(ColorOfFigure)[rand]];
  return randColorValue;
}

function checkAlreadyMove(randColorValue) {
  if (AlreadyMove.includes(randColorValue)) {
    console.log(randColorValue + " Already make a move. Chosse new Color");
    return true;
  }
  AlreadyMove.push(randColorValue);
  console.log("ColorePushed")
  console.log(AlreadyMove);
  return false;
}

function CurrentColorObjectMove(Color,number){
  GameObjectPosition[Color] = GameObjectPosition[Color]+ number
  console.log("GameObjectPosition " +Color + " : "+GameObjectPosition[Color])

  let new_left = parseInt(Field[number].left.substr(0, 3));
  new_left = new_left + 6;
  let final_left = new_left + "px";
  document.getElementById(Color).style.left = final_left;

  let new_top = parseInt(Field[number].top.substr(0, 3));
  new_top = new_top + 6;
  let final_top = new_top + "px";
  document.getElementById(Color).style.top = final_top;

  




}






//Logbook
/* 
next step:
I: 

*/
