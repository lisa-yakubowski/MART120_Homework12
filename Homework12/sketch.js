var playerx = 50;
var playery = 550;
var clickx = -30;
var clicky = -30;
var obs1x = 0;
var obs1y = 0;
var obs2x = 0;
var obs2y = 800;


function setup() {
    createCanvas(800,600);
}
function draw() {
    background(255,236,249);
    spawnPlayer();
    movePlayer();
    clickObstacle();
    spawnObs();
    moveObs1();
    moveObs2();
    spawnExit();
    if(playerx >= 720 && playery <= 60)
    {
      win();
    }
}
function spawnPlayer() {
  fill(212,85,255);
  circle(playerx,playery,50);
}
function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    playery -= 5;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playery += 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerx += 5;
  }
  else if (keyIsDown(LEFT_ARROW)) {
  playerx -= 5;
  }
}
function spawnExit() {
  fill(212,85,255);
  square(730,0,70);
  fill(0,0,0);
  textSize(20);
  text('Exit',750,40);
}
function win() {
  fill(0,0,0);
  textSize(30);
  text('YOU WIN!',350,300);
}
function clickObstacle() {
  fill(230,0,0);
  circle(clickx, clicky, 35);
}
function mousePressed() {
   clickx = mouseX;
   clicky = mouseY;
}
function spawnObs() {
  fill(25,25,230);
  circle(obs1x, obs1y,40);
  fill(230,25,25);
  square(obs2x, obs2y,30);
}
function moveObs1 () {
  if(obs2x >= 0) {
    obs2x -= 20;
  }
  else {
    obs2x = 800;
  }
  if(obs2y >= 600) {
    obs2y = 0;
  }
  else if(obs2y >= 260 && obs2y <= 400) {
    obs2y +=20;
  }
  else (obs2y < 600)
  {
    obs2y += 15;
  }
}
function moveObs2 () {
  if(obs1x <= 800) {
    obs1x+=20;
  }
  else {
    obs1x = 0;
  }
  if(obs1y <= 600) {
    obs1y+=20;
  }
  else {
    obs1y = 0;
  }
}
