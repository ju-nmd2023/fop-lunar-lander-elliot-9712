//following 3 lines from https://pixelkind.github.io/foundationsofprogramming//programming/15-07-example
let starX = [];
let starY = [];
let starAlpha = [];

let flame = false;

let moonY = 250;
let moonX = 100;

let velocity = 0.5;
const acceleration = 0.1;

let gameIsRunning = false;
let showGame = false;
let startGame = false;

//code from https://pixelkind.github.io/foundationsofprogramming//programming/15-07-example
for (let i = 0; i < 500; i++){
    const x = Math.floor(Math.random() * 850);
    const y = Math.floor(Math.random() * 850);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

function setup(){
    createCanvas(850, 850);
    background(255, 255, 255);
}

function keyPressed(){
    if (keyCode === 13){ // Enter
        restartGame();
        startGame = true;
        showGame = true;
        gameIsRunning = true;
    } else if (keyCode === 27) { // ESC
        startGame = false;
        showGame = false;
        gameIsRunning = false;
    } else if (showGame === false && keyCode === 82) { // R
        startGame = true;
         rules();
    } else if (showGame === false && keyCode === 67) { // C
        startGame = true;
         controls();
    }  else  if (keyCode === 32) { // Space
        flame = true;
    }
}

function keyReleased() {
    if (keyCode === 32) { // Space
        flame = false; 
    }
}

function rules(){
    scenery();
    stars();

    push();
    fill(11, 218, 81); 
    textSize(50); 
    textAlign(CENTER);
    text("Rules", width/2, 270);

    textSize(30); 
    textAlign(CENTER);
    text("The aim of the game is to land the spacecraft", width/2, 370);
    text("The velocity must not exceed 30 km/h during landing", width/2, 420);

    textSize(30); 
    textAlign(CENTER);
    text("Press ESC to return to the start screen", width/2, 620);
    text("Or press enter to start the game", width/2, 670);
    pop();
}

function controls(){
    scenery();
    stars();

    fill(138, 43, 226); 
    textSize(50); 
    textAlign(CENTER);
    text("Controls", width/2, 270);

    textSize(30); 
    textAlign(CENTER);
    text("Hold Spacebar to counterthrust", width/2, 370);
    text("Press Enter to restart the game", width/2, 420);

    textSize(30); 
    textAlign(CENTER);
    text("Press ESC to return to the start screen", width/2, 620);
    text("Or press enter to start the game", width/2, 670);
}

function restartGame(){
    spacecraftX = 100;
    spacecraftY = 0;

    velocity = 0.5;
}

function moon(){
    push();
    fill(128, 128, 128);
    ellipse(moonX+300, moonY+320, 400, 250);

    //Craters
    fill(100, 100, 100);
    ellipse(moonX+200, moonY+275, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+290, moonY+275, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+350, moonY+290, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+400, moonY+250, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+300, moonY+235, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+375, moonY+335, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+300, moonY+400, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+200, moonY+375, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+380, moonY+395, 40, 20);

    fill(100, 100, 100);
    ellipse(moonX+305, moonY+ 360, 40, 20);

    //rocks
    fill(110, 110, 110);
    ellipse(moonX+350, moonY+250, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+250, moonY+250, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+150, moonY+290, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+450, moonY+290, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+230, moonY+290, 20, 10);

    //
    fill(110, 110, 110);
    ellipse(moonX+240, moonY+390, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+260, moonY+350, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+330, moonY+320, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+130, moonY+340, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+430, moonY+370, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+200, moonY+330, 20, 10);

    fill(110, 110, 110);
    ellipse(moonX+410, moonY+295, 20, 10);
    pop();
}

function scenery(){
    push();
    noStroke();
    fill(0, 0, 0);
    rect(0, 0, width, height);
    pop();
}

function startScreen(){
    scenery();
    stars();
    moon();
    spacecraftX = 0;
    spacecraftY = 0;
    spacecraft(100, 375);
    push();
    fill(11, 218, 81); 
    textSize(50); 
    textAlign(CENTER);
    text("Welcome To The Alien", width/2, 120);

    fill(138, 43, 226); 
    textSize(45); 
    textAlign(CENTER);
    text("Lunar Landing Game", width/2, 200);

    fill(0, 200, 255); 
    textSize(35); 
    textAlign(CENTER);
    text("Press Enter to Start", width/2, 330);

    fill(11, 218, 81); 
    textSize(30); 
    textAlign(CENTER);
    text("Press R for Rules", width/2, 750);

    fill(138, 43, 226); 
    textSize(30); 
    textAlign(CENTER);
    text("Press C for Controls", width/2, 800);
    pop();
}

function flameEffect(x, y){
    //flame from https://www.youtube.com/watch?v=cl5FW_zgY_Q
    noStroke();
    fill(255, 185, 0);
    ellipse(x, y + random(35,50), 20, 60);
    fill(255, 255, 0);
    ellipse(x, y + random(35, 50), 15, 40);
}

function stars(){
    //code from https://pixelkind.github.io/foundationsofprogramming//programming/15-07-example
    for (let index in starX) {
        fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
        ellipse(starX[index], starY[index], 3);
        starAlpha[index] = starAlpha[index] + 0.02;
    }
}
 
function spacecraft(x, y){
    push();
    translate(x, y);

    //Landing gear
    fill(75, 125, 255);
    arc(spacecraftX+300, 110, 50, 40, PI, 0, CHORD);

    //Spaceship cylinder
    fill(0, 200, 255);
    ellipse(spacecraftX+300, 75, 30, 80);
    stroke(1);

    //Glass dome
    fill(255, 255, 255, 160);
    arc(spacecraftX+300, 60, 28, 49, PI, 0, CHORD);


    //body
    fill(138, 43, 226);
    arc(spacecraftX+300, 60, 20, 15, PI, 0, CHORD);
    
    //alien
    fill(11, 218, 81);
    ellipse(spacecraftX+300, 50, 20, 15);

    //eyes
    noStroke();
    fill(255, 255, 255);
    ellipse(spacecraftX+295, 48, 3, 3);
    ellipse(spacecraftX+300, 48, 3, 3);
    ellipse(spacecraftX+305, 48, 3, 3);

    //pupils
    fill(0, 0, 0);
    ellipse(spacecraftX+295, 48, 2, 2);
    ellipse(spacecraftX+300, 48, 2, 2);
    ellipse(spacecraftX+305, 48, 2, 2);

    //mouth
    stroke(1);
    fill(255,0,0);
    line(spacecraftX+297.5, 52, spacecraftX+302.5, 52);
    pop();
}

function winScreen(){
    scenery();
    stars();
    moon();
    spacecraft(spacecraftX-100, spacecraftY);
    push();
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("Successful Landing!", width/2, 150);

    fill(11, 218, 81);
    textSize(30);
    textAlign(CENTER);
    text("Restart By Pressing Enter", width/2, 250);

    fill(138, 43, 226);
    textSize(30); 
    textAlign(CENTER); 
    text("Quit By Pressing ESC", width/2, 350);
    pop();
}

function lossScreen(){
    scenery();
    stars();
    moon();
    push();
    fill(255, 0, 0); 
    textSize(40);
    textAlign(CENTER); 
    text("Crash Landing!", width/2, 150); 

    fill(11, 218, 81); 
    textSize(30); 
    textAlign(CENTER); 
    text("Restart By Pressing Enter", width/2, 250);

    fill(138, 43, 226);
    textSize(30); 
    textAlign(CENTER); 
    text("Quit By Pressing ESC", width/2, 350);
    pop();
}

function speedometer(){
    push();
    fill(255, 255, 255);
    textSize(30);
    text(Math.floor(velocity.toString()*20) + " km/h", 100, 100);
    pop();

    if (velocity * 20 > 30){
        fill(255, 0, 0);
        textSize(30);
        text(Math.floor(velocity.toString()*20) + " km/h", 100, 100);
    }
}

function draw(){

    

    if (startGame === false){
        startScreen();
    } if (showGame === true) {
        scenery();
        stars();
        moon();  
        speedometer();

        if (flame === true) { 
            flameEffect(spacecraftX+300, spacecraftY+75);
        }
        spacecraft(spacecraftX-100, spacecraftY);
    

    if(gameIsRunning === true){
    spacecraftY = spacecraftY + velocity;
    velocity = velocity + acceleration;

    if (keyIsPressed && keyCode === 32) {
        velocity = velocity - 0.2;
    }


    if(spacecraftY > moonY+120 && velocity*20 > 30) {
        gameIsRunning = false;
        showGame = false;
        console.log("Crash Landing!");
        lossScreen();
    
    } else if (spacecraftY > moonY+120 && velocity*20 <= 30) {
        gameIsRunning = false;
        showGame = false;
        console.log("Successful Landing!");
        winScreen();
    }
}
} 
}
