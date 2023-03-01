let x;
let y;
let speedX;
let speedY;


function setup() {
  createCanvas(400, 400);
  
  x = 5;
  y = 8;
  speedX = 3;
  speedY = 9;
  
}

function draw() {
  background(44,130,87);
  
  x = x + speedX;
  y = y + speedY;
  tFace(x,y,.3);
  if (x >= 300 || x <= 0){
    speedX = speedX * -1
      
 } 

  if(y >= 300 || y <= 0){
    speedY = speedY * -1
  } 
  if(keyIsPressed){
    y = x + 1
  }
  
  keyPressed();
 
}
function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    speedX = 3
  } else if (keyCode === RIGHT_ARROW) {
    speedY = 9
  } else if (keyCode === UP_ARROW){
    speedX = -3
  } else if ( keyCode === DOWN_ARROW){
    speedX = -9
  }
  
}

function tFace(x,y,s){
  push();
  translate(x,y)
  scale(s)
  beginShape();
  fill(44, 68,117)
vertex(30,15);
vertex(200,15);
vertex(200, 75);
vertex(30, 75);
endShape(CLOSE);
  
  
   beginShape();
  fill(44, 68,117)
  noStroke();
vertex(80, 75);
vertex(150,75);
vertex(150,200);
vertex(80,200);
endShape(CLOSE);
pop();
}
