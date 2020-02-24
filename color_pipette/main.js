// Get pixel color under the mouse.
var robot = require("robotjs");

// Get mouse position.


colorPipette();



function colorPipette(){
    let timer = setInterval (function() {
        let mouse = (robot.getMousePos())
// Get pixel color in hex format.
    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
    }, 1000) ;
};
