// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?
var edge = false;
var scalingx = false;
var scalingy = false;

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(640, 360);

  // Starting location
  x = 100;
  y = 100;
  // Dimensions
  w = 75;
  h = 50;
  margin = 5;
}

function draw() {
  background(255);
  text('x: ' + x, 10, 30);
  text('y: ' +y, 10, 45);
  text('w: ' +w, 10, 60);
  text('h: ' +h, 10, 75);


  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  }
  else if(mouseX > x-margin && mouseX < x+margin + w && mouseY > y-margin && mouseY < y+margin + h){
          edge = true;
          if((mouseX < x+margin + w) && mouseIsPressed){
            scalingx = true;
          }if((mouseY < y+margin + h) && mouseIsPressed){
            scalingy = true;
          }
  }
  else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  if(scalingx) {
  w = w + mouseX-pmouseX;
  }
  if(scalingy) {
  h = h + mouseY-pmouseY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (edge || scalingx || scalingy) {
    fill(90,90,200);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  rect(x, y, w, h);

  if(!mouseIsPressed){
  edge=false;
  }
}



function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
  scalingx = false;
  scalingy = false;
}
