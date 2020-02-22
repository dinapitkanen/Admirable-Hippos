const robot = require("robotjs");
let x = robot.getMousePos().x;
let y = robot.getMousePos().y;
console.log("color: " + robot.getPixelColor(x, y) + " x: " + x + " y: " + y);

// bright color: dc8a00
// dark color: 6b43000