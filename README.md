# Mars-Rover-Kata

<h2>Introduction</h2>
We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth. At Ironhack, we’ve been tasked with developing the code for doing so, and we figured this would be a job for the junior developers.
</br>
<h2>Basic Information</h2>
Our Mars Rover is kind of dumb. By that, we mean it can’t move and turn at the same time. This means that if the rover wants to move to the left, it’s first move must be a turn. Its next move will then be a step forward.
</br>
In addition, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to mars.
</br>
At a high level, what we will do in the exercise is the following:
</br>
<ul>
  <li>Create a function to turn the rover.</li>
  <li>Create a function to move the rover forwards or backwards based on its direction.</li>
  <li>Create a function to receive a list of commands and move based off of those commands.</li>
  <h2>Setup</h2>
In this exercise, we can use the Chrome Developer Console to take advantage of global functions and objects.
<br>
  <h2>Iteration 1 | The Rover Object</h2>
Create an object to represent the rover. This object will have only one property for now: the direction.
</br>
The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (north).
</br>
<h2>Iteration 2 | Turning the Rover</h2>
The rover has a direction attribute. We’ve already provided functions called turnLeft and turnRight that receive a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.
</br>
Examples:
<ul>
  <li>Rover is facing North and turns left => Rover is now facing West</li>
  <li>Rover is facing West and turns left => Rover is now facing South</li>
  <li>Rover is facing North and turns right => Rover is now facing East.</li>
  <h3>Suggested Approach</h3>
Begin with the a switch statement. Based off of which function is being called, turn the rover in the correct direction based off of its current direction.
</br>
Test these functions using the Chrome Console to make sure they work. Remember, the console.log() function can be used to log anything. You can use this to see which direction your rover is currently facing.
</br>
<h2>Iteration 3 | Moving the Rover</h2>
<h3>The Rover Object’s position</h3>
In order to move the rover around, we have to keep track of the rover’s position. Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be 0.
<h3>Moving Forward</h3>
Once the rover has a position, it’s time to move it.
<h3>How to Move</h3>
Moving forward is a function of the rover’s current direction, and the movement forward.
</br>
For instance, if the Rover is facing west and moves forward, we would decrease the Rover’s x by 1. If the rover is facing north and moves forward, we would decrease the rover’s y by 1. If the rover is facing south and moves forward, we would increase the y by 1.
</br>
Fill in this logic in the moveForward function. After each movement, console.log the rover’s coordinates so you can see where it is positioned.
</br>
<h2>Iteration 4 | Commands</h2>
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.
</br>
To test it, use the string: ‘rffrfflfrff’.
</br>
<h3>Suggested Approach</h3>
Use a loop to iterate over the string. Inside of this loop, write a switch or if statement to call the correct function. For instance, if the letter is f, you’re going to want to call the goForward function.
</br>
<h2>Iteration 5 | Tracking</h2>
We want to know where our rover has been. Create a property on the rover object that contains the coordinates of the places it has been. Call this property travelLog.
</br>
After each move, push the coordinates of the previous space to the travelLog array. After the rover has finished its moves, print out all of the spaces the rover has traveled over.
</br>
<h2>Bonus | Enforce Boundaries</h2>
At some point you may have accidentally run our rover off of the grid. If you recall, our grid is 10x10.
</br>
Make sure your rover doesn’t accidentally roam off the map!
</br>
<h2>Bonus | Other Suggested Features</h2>
If you found the first few iterations of the exercise easy, try implementing the following features:
</br>
Moving Backwards: Create another function called moveBackward that will move the rover back. This will be very similiar to the moveForward function.</br>
Validate Inputs: If we enter a letter into our inputs that isn’t a rover command, nothing happens. For example ffzzy would simply move forward twice. Add validation so that the inputs must be f, b, r, or l.</br>
The following require you to actually create a grid for the rover to move around on. In code, these grids are often represented as two dimensional arrays.
</br>
Obstacles - Create obstacles for the rover. If the rover’s next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.</br>
Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.
