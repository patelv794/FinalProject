//globals
var myBubble;
var bubbles;
var framesPerSec = 20;

function Bubble(startX, startY){
  this.position = createVector(startX, startY);
  this.velocity;
  this.speed = 5;
  this.angle = random(365);
  this.angle = 330;
  //this.speed = createVector(5,5);
  this.r = 50;
   
  
  
  this.calcVelocity = function(){
    //angleMode(DEGREES);
  this.velocity = p5.Vector.fromAngle(radians(this.angle));
    this.velocity.mult(this.speed);
  }
  this.calcVelocity();
  
  this.move = function(){
    
   
    
    var newPos = p5.Vector.add(this.position,this.velocity);
    //console.log("newPos",newPos);
    if(newPos.x > width-this.r || newPos.x < 0+this.r){
      this.angle = 180-this.angle;
      this.calcVelocity();
    }
    
    if(newPos.y > height-this.r || newPos.y < 0+this.r){
      this.angle = 360-this.angle;
      this.calcVelocity();
    }
    
    
    
    
    this.position.add(this.velocity);
  }
  
  this.drawBubble = function(){
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }
}


//p5 setup function
function setup(){
  createCanvas(windowWidth,windowHeight);


  bubbles=[];
  for(var i=0; i<7; i++){
    bubbles.push(new Bubble(random(width),random(height)));
  }
  
}

function draw(){
  background('black');

  
  var d;
  for(var i=0;i<bubbles.length;i++){
    bubbles[i].move();
    
    
    
    var desiredseparation = 25.0;
  var steer = createVector(0,0);
  var count = 0;
  // For every boid in the system, check if it's too close
  for (var j = 0; j < bubbles.length; j++) {
     d = p5.Vector.dist(bubbles[i].position,bubbles[j].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(bubbles[i].position,bubbles[j].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
    
    
    
    //test to see if it is touching any of the others
    /*for(var j=0;j<bubbles.length;j++){
      d = bubbles[i].position.dist(bubbles[j].position);
      if(bubbles[i] != bubbles[j] && d<bubbles[i].r+bubbles[j].r+20){
        console.log("touching");
        //bubbles[i].angle = p5.Vector.angleBetween(bubbles[i].position, bubbles[j].position);
        //bubbles[i].calcVelocity();
        bubbles[i].angle = bubbles[i].angle - bubbles[j].angle;
        bubbles[i].calcVelocity();
        bubbles[i].move();
        
      }
      
      
      
      
    }*/
    bubbles[i].drawBubble();
  }
  
}