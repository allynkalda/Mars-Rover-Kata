// Iteration 1

var rover = {
	direction: "N",
	x: 0,
	y: 0,
// Iteration 5
	travelog: [];
}

var roverDir = rover.direction;
var roverY = rover.y;
var roverX = rover.x;


// Iteration 4
function commands(stuff) {
for (var i = 0; i < stuff.length; i++) {

var letter = stuff.charAt(i);

switch (letter) {
	case "f":
	console.log(moveForward());
	break;
	case "r":
	console.log(turnRight());
	break;
	case "l":
	console.log(turnLeft());
}
}
}


commands("rffrfflfrff");

// Iteration 3
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
return "X is: " + roverX + ", Y is: " + roverY;
}

// Iteration 2
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

// These are from first function











var board = [
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
  [null, null, null, null, null, null, null, null, null,null],
];
