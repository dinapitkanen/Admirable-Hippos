
# What the project does

This project implements Robotjs ability to read mouse position and read pixel color according to the position of mouse. When you start the program a count down from 5 will begin. When reach 0 the game is reading you mouse position every 5 millisecond. By moving mouse within the light blue area the program keeps running. When hovering over the green dot the console will log 'You made it to the end of the road! Good job!' and the program will stop running. If the mouse touches the dark blue field the console will log 'You stepped outside of the road! Try again!' and a count down from 5 to 1 will start before the program reads the position of mouse and pixel color again.

# Why the project is useful

I'm exploring implementation in a situation where one would want to design some kind of fine movement skills in a game setting. Thanks to robotjs ability to read both small and larger pixel fields it can make a game get a detailed field of challenges just by drawing the background boards and keep record the colors you wish the program to react to.

# How users can get started with the project

1. You will need Visual Studio Code or some other IDE.
2. Open the index.html in live server. Make it smaller so you can fit IDEs terminal window to the side. Make sure the bigger part of the image is visible to you.
3. Open the IDEs terminal of main.js.
4. When both windows are next to each other, in IDE main.js terminal type: node main.js
5. Move your mouse so it hovers the big light blue field (still let the terminal type field be active) and press enter.
6. You will see the count down be executed in the terminal. When the countdown stops you'll know you are free to move mouse and it's being read.
7. Now try to reach the green dot without touching the dark blue field. Remember: no mouse click needed. Good luck!

# Who maintains and contributes to the project

No maintaining of this project will be done.

# Big thanks to:

## Jason Stallings

robotjs source https://github.com/octalmage/robotjs

 Examples used:

### getMousePos()
var robot = require("robotjs");

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
https://robotjs.io/docs/syntax#getmousepos 

### getPixelColor(x, y)
Return
Returns the hex color code of the pixel at x, y.
https://robotjs.io/docs/syntax#getpixelcolorx-y 

var robot = require("robotjs");

### getPixelColor(x,y) #2
// Get mouse position.
var mouse = robot.getMousePos();

// Get pixel color in hex format.
var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
https://robotjs.io/docs/examples#screen 

Examples tried to use without success:

### moveMouseSmooth()
Moves mouse to x, y human like, with the mouse button up.
https://robotjs.io/docs/syntax#movemousesmoothx-y

## My fellow group mates
Max Derlow, Axel Bengtsson and Mariel A. Casuga. 
Special thanks to Axel Bengtsson, who helped me with the refinement of the end code.


