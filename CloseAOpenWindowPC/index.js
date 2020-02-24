const robot = require('robotjs');

let screenSize = robot.getScreenSize();
let screenWidth = screenSize.width;
let closeBtn = {x: screenWidth, y: 0};

robot.moveMouseSmooth(closeBtn.x, closeBtn.y);
robot.mouseToggle('down');
robot.mouseToggle('up');