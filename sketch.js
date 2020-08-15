var car, wall;
var speed, weight;
var deForm;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  createSprite(400, 200, 50, 50);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, hieght/2);
}

function draw() {
  background(255,255,255);  
  if(car.x - wall.x === car.width/2 + wall.width/2){
    deForm = (0.5*weight*speed*speed)/22500;
  }
  if(deForm < 100){
    car.color = rgb(0, 255, 0);
  }
  else if(deForm > 100 && deForm < 180){
    car.color = rgb(230, 230, 0);
  }
  else if(deForm > 180){
    car.color = rgb(255, 0, 0)
  }
  drawSprites();
}
