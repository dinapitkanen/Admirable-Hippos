const robot = require('robotjs');

//Declaring some variables which we will use later
let mousePos = robot.getMousePos();
let newMousePos = { x: 0, y: 0};
let randomValue = Math.random();
let mouseMoveTimesCount = 0; 

//This function will be called when we run the .js file. This function also starts the game.
timerMouseMovement();


//This function starts with a timer that controlls how long it will take from the moment the program starts to the moment when the mouse starts to move.
//This is also the 'down' time between mouse runs.
function timerMouseMovement () {
    setTimeout(function () {
        moveTheMouse();

        //This function handles the number of moves the mouse will do and makes sure that the mouse moves. This also has a timer that controlls 
        //the time between the small moves.
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
    }, 10000);
}


//This is the function that creates a random movement in both X and Y, negative and positive.
function randomMovement () {
    randomValue = Math.random();

    if ( randomValue < 0.6){
        return randomValue * 6;
    }else {
        return randomValue * -6;
    }
}