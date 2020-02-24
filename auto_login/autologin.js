/* Has to be run with a resolution of 1920x1080 on windows 10 atm. Resolution scaling scuffs the API's interpretation of the screen's resolution */

//require necessary APIs

const fs = require("fs"); //necessary for names and apsswords that aren't hard-coded
const robot = require("robotjs"); //automatic tools
const open = require("open"); //open desktop-level applications/websites

//Get screen size
const screenWidth = robot.getScreenSize().width;
const screenHeight = robot.getScreenSize().height;

//basic configs of robojs + variable declerations
robot.setKeyboardDelay(250);
let accounts = {};
const accountsFile = fs.readFileSync(__dirname + "//loginInfo.txt").toString().split('\n');

//get user's OS and set app paths.

const operatingSystem = process.platform;
console.log(operatingSystem);

const pathWin = __dirname + "\\runelite\\runelite.exe";
const pathMacOS =  "/applications/program/runelite.app";

// Search for the client window and automate the login procedure.
function clientFound(color, i, x, y) {
    console.log("COLOR FOUND");
    while(color === "1e1e1e"){
        y++;
        color = robot.getPixelColor(x,y)}
        robot.moveMouse(x,(y - 2));
        robot.mouseClick();
        robot.keyTap("enter");
        robot.typeString(accounts[i].username.substr(3));
        robot.keyTap("enter");
        robot.keyTap("enter");
        robot.typeString(accounts[i].password.substr(3));
        robot.keyTap("enter");
}

//TODO: add some error handling and shit
//Get all of the accounts from the file
for(let row = 1, i = 0; row <= accountsFile.length -1; row++){
    if(accountsFile[row].slice(0,2) === "un"){
        //found username
        if(accountsFile[row+1].slice(0,2) === "pw"){
            //found associated password
            accounts[i] = {username: accountsFile[row], password: accountsFile[row+1]};
            i++;
        }
    }
}

// console.log(accounts);

// loop the login procedure for all accounts.
for(let i in accounts){
    // get user's os
    if(operatingSystem === "Win32"){
        open(pathWin);
    } else if (operatingSystem === "darwin"){
        open(pathMacOS);
    }

    // starting window pops up and disappears 3 times. These variables/conditionals help in dealing with that.
    let disappearCount = 0;
    let disappearBuffer = false;
    let updating = true;

    while(updating === true){
        let color = robot.getPixelColor((screenWidth / 2),(screenHeight / 2));

        if(disappearCount >= 3){
            updating = false;
            continue;
        }
        if(color === "1e1e1e"){
            disappearBuffer = false;
        } else if (color !== "1e1e1e" && disappearBuffer === false){
            disappearCount++;
            disappearBuffer = true;
            console.log("disappear count: " + disappearCount);
        }
    }

    // loop the colors of the screen until the client has been found
    for(let x = 0, y = 0; y <= screenHeight; x++){
        if(x >= (screenWidth - 40)){
            x = 0;
            y += 30;
        } else {
            x += 50;
        }

        let color = robot.getPixelColor(x,y);
        console.log("color: " + color + " x: " + x + " y: " + y);
        if(color === "1e1e1e"){
            clientFound(color, i, x, y);
            i++;
            break;
        }
    }
}