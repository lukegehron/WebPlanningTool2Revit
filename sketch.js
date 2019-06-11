document.getElementsByName("send")[0].addEventListener('click', reload);

function reload(){
  let output = x.toString()+ ", " + y.toString() + ", " + w.toString() + ", " + h.toString() ;
  saveStrings(output, 'data.csv', "csv");
}

let x = 100;
let y = 200;
let w = 100;
let h = 200;

let m = 5; //margin
let draggable = 0;
let scalable = 0;

function setup() {
  createCanvas(400, 400);
  img = loadImage('assets/Tufts.jpg'); // Load the image
}

function draw() {

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(100, 100, 255);
    if (mouseIsPressed) {
      draggable = 1;
    }
  } else if (mouseX > x - m && mouseX < x + w + m && mouseY > y - m && mouseY < y + h + m) {
    fill(100, 255, 100);
    if (mouseIsPressed) {
      scalable = 1;
    }
  } else {
    fill(255);
  }

  if(draggable == 1){
    x = x + (mouseX - pmouseX);
    y = y + (mouseY - pmouseY);
  }

  if(scalable == 1){
    draggable = 0;
    w = w + (mouseX - pmouseX);
    h = h + (mouseY - pmouseY);
  }

  background(220);
  image(img, 0, 0);
  rect(x, y, w, h);
  fill(0);
  text(x, 10, 20);
  text(y, 10, 35);
  text(w, 10, 50);
  text(h, 10, 65);
}

function mouseReleased(){
  draggable = 0;
  scalable = 0;
}
