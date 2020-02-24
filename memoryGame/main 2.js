
// draws a red solid 150 x 100 rectangle

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#f2250a";
    ctx.stroke();
    ctx.delay(time).fadeOut(300);

// not able to get the fade working.

// robotjs reads mouse check points a 20, 150, 100, 20 
var robot = require("robotjs");

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
scrollMouse(x, y);



