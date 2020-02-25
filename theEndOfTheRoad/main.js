/*
Pseudo code:
Function Read mouse position & get pixel color;
Move mouse to start position, count down from 3.
Read mouse position and color pixel.
If (pixel color is green #10af0d -> log Success' & break. 
If pixel color is dark blue (#1f2e57) -> log 'Try again!'.
Move mouse back to start position (x = 183, y = 326) & rerun the game until executed 3 times.
*/

// require API Robotjs
const robot = require('robotjs');

//Declaring variables which I will use later
let mousePixelColor;
let i = 3;
let z = 0;
/*
Console log to make control check of the hex code being read:
//console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));
*/

//This function will be called when we run the .js file. This function also starts the game.
startGameTimer();

/*
This function logs a countdown from 5 to 1 and then calls the 'checkMouseInLine()', moves your mouse to a precise position on screen
and stops the countdown when you're free to interact with the game.
*/

function startGameTimer(){
    robot.moveMouseSmooth(183, 325);
    setTimeout (function(){
        if(i==0){
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

        //If the color of the pixel is green it's a win and the program closes.
        //I have added more hex codes due to differences in
        //reading the color code depending on computers different screen settings. 
        if (mousePixelColor == '00b800' || mousePixelColor == '00b700' || mousePixelColor == '10af0d'){
            console.log('You made it to the end of the road! Good job!');
            clearInterval(timer);
        }

        //If the color of the pixel is not green or light blue it means that the mouse is outside of the course and you fail
        //The timer starts over and you get a second chance
        //I have added more hex codes due to differences in
        //reading the color code depending on computers different screen settings. 
        else if (mousePixelColor == '1f2a5a' || mousePixelColor == '1f2e57'){
            console.log('You stepped outside of the road! Try again!');
            i = 3; 
            z++;
            if (z == 3){
                clearInterval(timer);
            }else{
                
                startGameTimer();
                clearInterval(timer);
            }
        }
    }, 50);
}

