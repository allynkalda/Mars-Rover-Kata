var rover = {
	direction: "N",
	x: 0,
	y: 0,
	travelog: [],
}

var roverDir = rover.direction;
var roverY = rover.y;
var roverX = rover.x;

// Iteration 5

console.log(rover["travelog"]);

function commands(stuff) {
for (var i = 0; i < stuff.length; i++) {

var letter = stuff.charAt(i);


switch (letter) {
	case "f":
rover["travelog"].push(moveForward());
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
return "X: " + roverX + ", Y: " + roverY;
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
