const robot = require('robotjs');

//Declaring some variables which we will use later
let screenSize = robot.getScreenSize();
let screenWidth = screenSize.width;
let closeBtn = {x: screenWidth, y: 0};

//Moves mouse to the upper right corner where the close button is located
robot.moveMouseSmooth(closeBtn.x, closeBtn.y);
//Presses the mouse button down
robot.mouseToggle('down');
//Lifts the mouse button again
robot.mouseToggle('up');