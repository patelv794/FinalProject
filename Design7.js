let radius, points, deltaAngle,
    f, angle, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  points = 69;//number of points per circle
  deltaAngle = radians(360/points);//change in angle
  f = x => 10 * sin(x/4);//function for the size of the dots
  angle = 0;//angle used for offset (degrees)
  speed = 0.5;//speed of rotation (degrees per frame);
  resize();
}

function draw() {
  angle += speed;
  
  let offset = radians(angle);
  let mod = -1;//Used to determine the circle
  //-1 = left circle, rotates counter-clockwise, adds another point to the circle
  //1 = right circle, rotates clockwise
  
  //loop angle on the interval [0, 360/points)
  if (angle > 360/points || angle < -360/points) {
    angle = 0;
  }
  
  clear();
  background(136, 192, 255);
  translate(width/2, height/2);
  
  noStroke();
  fill(0, 0, 0);
  //loop through each circle
  for (let i = -radius; i <= radius; i += radius * 2) {
    let rot = 0;
    //rotate the right circle 180 degrees;
    if (mod > 0) {
      rot = PI;
    }
    
    let cx = i;
    
    //loop through all the points,
    //add another point to the left circle
    for (let j = 0; j < points + -(mod - 1)/2; j++) {
      
      let angle = offset * mod + deltaAngle * j;
      
      let x = radius * cos(angle + rot) + i,
          y = radius * sin(angle + rot);
      
      let size = f(angle);
      ellipse(x, y, size, size);
    }
    
    mod += 2;
  }
}

function resize() {
  let size = min(width, height);
  radius = size/4;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resize();
}