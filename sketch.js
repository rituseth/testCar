var car , wall ;
var speed , weight ;

function setup() {
  var canvas  = createCanvas(1600,400);

  speed = random (55,90);
  weight = random (400,1500);
  car = createSprite(50,200,50,50,);
  car.velocityX = speed;
  wall = createSprite(1250,200,8,height/2);

}

function draw() {
  background("white");  

  drawSprites();
}