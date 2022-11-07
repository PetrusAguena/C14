var bow , arrow,  scene, score = 0;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var PinkBalloon , RedBalloon,GreenBalloon,BlueBalloon
var score=0;
var SpawnBalloons
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");


  
}



function setup() {
  createCanvas(400, 400);
  RedBalloon = createSprite()
  RedBalloon.addImage(red_balloonImage);
  BlueBalloon = createSprite()
  BlueBalloon.addImage(blue_balloonImage);
  GreenBalloon = createSprite()
  GreenBalloon.addImage(green_balloonImage);
  PinkBalloon = createSprite()
  PinkBalloon.addImage(pink_balloonImage);  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
}

function draw() {
 background(0);
 

    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  

  bow.y = World.mouseY
  

  if (keyDown("space")) {
    createArrow();
    
  }
   




  if (World.frameCount % 60 == 0) {
    var balloon
     balloon = createSprite(0,200,60,60);
     balloon.velocityX = 4
     balloon.scale = 0.1
      SpawnBalloons = Math.round (random(1,4));
   switch(SpawnBalloons){
    case 1:balloon.addImage(red_balloonImage);
    break;
    case 2:balloon.addImage(blue_balloonImage);
    break;
    case 3:balloon.addImage(green_balloonImage);
    break;
    case 4:balloon.addImage(pink_balloonImage);
    break;
    default:break;
  }}
    
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);

  red.velocityX = 3;
  red.lifetime = 150;

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
 
  blue.velocityX = 3;
  blue.lifetime = 150;

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);

  green.velocityX = 3;
  green.lifetime = 150;

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);

  pink.velocityX = 3;
  pink.lifetime = 150;

}
