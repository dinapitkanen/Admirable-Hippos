const robot = require('robotjs');

let pointA = robot.getMousePos();
let pointB = { x: pointA.x + 50, y: pointA.y + 50};

timeToAction();

function timeToAction(){
    setTimeout (function() {
        console.log(pointB);
        robot.mouseToggle("down");
        robot.dragMouse(pointB.x, pointB.y);
        robot.mouseToggle("up");
    }, 5000);
}