// require API
var robot = require("robotjs");

// This calls the function
colorPipette();

// This is the core of the pipette declaring what the function will do.
// Get pixel color in hex format and read it every second until you stop the code.

function colorPipette(){
    let timer = setInterval (function() {
        let mouse = (robot.getMousePos())

    var hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
    }, 1000) ;
};
