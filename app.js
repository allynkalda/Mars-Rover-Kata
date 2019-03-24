var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelog: [],
}

var roverDir = rover.direction;
var roverY = rover.y;
var roverX = rover.x;


var board = [
  [null, "S", null, null, null, "S", null, null, null, null],
  ["S", null, null, "S", null, null, null, null, null, null],
  [null, null, null, "S", null, null, null, null, null, null],
  [null, null, null, "S", null, null, null, null, null, null],
  [null, null, null, "S", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],

];
// Input command:

commands("rff");

console.log(rover.travelog);
console.log(roverDir);
console.log(board[roverY][roverX]);

// Run loop over command

function commands(stuff) {
for (var i = 0; i < stuff.length; i++) {

var letter = stuff.charAt(i);


switch (letter) {
  case "f":
  moveForward();
  break;
  case "r":
  turnRight();
  break;
  case "l":
  turnLeft();
  case "b":
  moveBackward();
  break;
  default:
  return;
      }
    }

/*   } else if (letter === "f") {
    rover.travelog.push(moveForward());
  } else if (letter === "b") {
    rover.travelog.push(moveBackward());
  }

*/

  // alerts when rover X or Y runs off grid

function checkGrid() {
  if (roverX > 9) {
    alert("Rover has run off grid!");
    return;
  } else if (roverY > 9) {
    alert("Rover has run off grid!");
    return;
  } else if (roverX < 0) {
    alert("Rover has run off grid!");
    roverX++;
  } else if (roverY < 0) {
    alert("Rover has run off grid!");
    roverX++;
  }



}   


function turnRight() {
switch (roverDir) {
  case "N":
  roverDir = "E";
  break;
  case "E":
  roverDir = "S";
  break;
  case "S":
  roverDir = "W";
  break;
  case "W":
  roverDir = "N";
}
return roverDir;
}


function turnLeft() {
switch (roverDir) {
  case "N":
  roverDir = "W";
  break;
  case "W":
  roverDir = "S";
  break;
  case "S":
  roverDir = "E";
  break;
  case "E":
  roverDir = "N";
}
return roverDir;
}

function moveForward() {

switch (roverDir) {
  case "N":
  roverY -= 1;
  break;
  case "S": 
  roverY += 1;
  break;
  case "W": 
  roverX -= 1;
  break;
  case "E": 
  roverX += 1;

}

checkGrid();
  if (board[roverY][roverX] === "S") {
    console.log("Obstacle found at X: " + roverX + " and Y: " + roverY +"!");
    moveBackward();
    
    }

  rover.travelog.push("X: " + roverX + ", Y: " + roverY);
}


function moveBackward() {

switch (roverDir) {
  case "N":
  roverY += 1;
  break;
  case "S": 
  roverY -= 1;
  break;
  case "W": 
  roverX += 1;
  break;
  case "E": 
  roverX -= 1;

}

console.log("X: " + roverX + ", Y: " + roverY);
}

}
