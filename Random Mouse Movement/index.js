const robot = require('robotjs');

let mousePos = robot.getMousePos();
let newMousePos = { x: 0, y: 0};
let randomValue = Math.random();
let mouseMoveTimesCount = 0; 

timerMouseMovement();

function timerMouseMovement () {
    setTimeout(function () {
        moveTheMouse();
        function moveTheMouse () {          
            setTimeout(function () {
                mousePos = robot.getMousePos();
                newMousePos = { x: mousePos.x + randomMovement(), y: mousePos.y + randomMovement()}
                robot.moveMouse(newMousePos.x, newMousePos.y);       
                mouseMoveTimesCount++; 
        
                if (mouseMoveTimesCount < 30) {           
                    moveTheMouse();             
                }                        
            }, 100);
        }
        mouseMoveTimesCount = 0;
        if (true){
            timerMouseMovement();
        }
    }, 50000);
}


      
function randomMovement () {
    randomValue = Math.random();

    if ( randomValue < 0.6){
        return randomValue * 6;
    }else {
        return randomValue * -6;
    }
}