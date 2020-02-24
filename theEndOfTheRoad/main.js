//* let robot = require('robotjs'); //*

// start mouse position x: 183, y: 325
// green color 'success' #10af0d
// road light blue color #3f87ba
// error dark blue color #1f2e57

// declare start position of mouse
//let startMousePosition = { 183, 325}

//declare value of count from start
//let getPixelCount = 0; 

// declare 
//getPixelColor(x, y);

//walkTheRoad();

 // function walkTheRoad () {
   // robot.moveMouseSmooth(startMousePosition);
   // getPixelColor(robot.getPixelColor); {
      //  robot.getPixelColor;
      //  if ( getPixelColor == '#10af0d' ) {
       //     alert('Success!');
       //     break;
       // } else if ( getPixelColor == '#1f2e57') {
       //     alert('Try again!');
       //     robot.moveMouse(startMousePosition); 
       // } else if (getPixelCount < 4) {
       //     getPixelColor;
       // } else (getPixelCount > 4); {
       //         break;
       //     }
       // }
//}; 
    
//console.log(walkTheRoad);


// pseudo code:
// Function Read mouse position & get pixel color;
// If (pixel color is green #10af0d -> alert 'Success!' & break. 
// Else if pixel color is dark blue (#1f2e57) -> alert 'Try again!' & return mouse to start position.
// Else call function getPixelColor again.

const robot = require('robotjs');

//Declaring some variables which we will use later
let mousePixelColor;
let i = 5;

//robot.moveMouseSmooth(0, 0);
console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));

//This function will be called when we run the .js file. This function also starts the game.

//startGameTimer();

//This function logs a countdown from 5 to 1 and then calls the 'checkMouseInLine()' and stops the countdown
function startGameTimer(){
    setTimeout (function(){
        if(i==0){
            //robot.moveMouse(183, 325);
            checkMouseInLine();
        }else{
            console.log(i);
            i--;
            startGameTimer();
        }
    }, 1000);
}


/* 
    This function is the core of the game. Here the code is written inside of a interval function that runs the code
    every 50 milliseconds. We're looping this code since we wanna check all the time if the mouse in within the track or
    not. We also wanna check if the mouse is in the 'win' area. If the mouse have reached the win area the code stops and
    it logs that you have won. If the mouse touches the edges the code will reset the mouse position and start the countdown 
    yet again.
*/
function checkMouseInLine(){

    //Everything in this function will be repeated every 50 milliseconds
    let timer = setInterval (function(){

        //Here we get the pixel color of the pixel that the mouse is hovering over
        mousePixelColor = robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y);

        //If the color of the pixel is green it's a win and the program closes
        if (mousePixelColor == '00b800' || '00b700'){
            console.log('You WON');
            clearInterval(timer);
        }

        //If the color of the pixel is not green or light blue it means that the mouse is outside of the course and you fail
        //The timer starts over and you get a second chance
        else if (mousePixelColor == '1f2a5a' || '1f2e57'){
            console.log('You FAILED, start over');
            //robot.moveMouse(183, 325);
            i = 5;
            startGameTimer(); 
            clearInterval(timer);
        }
    }, 50);
}

// Problems:
// The countdown goes on for 5 seconds and then it consoles 'you FAILED..', then starts over and over.
// This happens no matter where the mouse is positioned. 
// Also the mouse is not moved to any position when the program starts over.