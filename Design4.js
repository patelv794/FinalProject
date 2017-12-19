function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#42414F');
  strokeWeight(0.25);
  strokeCap(SQUARE);
  frameRate(60);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var w = random(width*1.5); //random X
    var colorList = [ "#42414F", "#4D6480", "#7E8693", "#A0968D", "#B59C93"]; //color list
    var c = round(random(4));  // select random color
    stroke(colorList[c]); //set fill color
    noFill();
    arc( width/2, height/2, w, w,random(45), random(45) );
    smooth(); //just smooth
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}