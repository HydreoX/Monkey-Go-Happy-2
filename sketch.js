var monkey,monkeyImage
var bananaImage,banana
var obstaclesImage,obstaclesGroup
var background,backgroundImage,invis
var score

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  backgroundImage = loadImage("jungle.jpg")
  obstaclesImage  = loadImage("stone.png")
  bananaImage = loadImage("banana.png")
}

function setup() {
 createCanvas(400, 400);
  
  invis = createSprite(200,370,400,10)
  invis.visibile = false;
  
  background = createSprite(200,200,400,400)
  background.addImage("background",backgroundImage)
  
  monkey = createSprite(50,330,50,50)
  monkey.addAnimation("monkey",monkeyImage)
  monkey.scale = 0.15
  

}

function draw() {

  if (keyDown("space")) {
    monkey.velocityY = -4
   }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invis);

  stroke(white);  

  obstacles();
  food();
  drawSprites()
}

function obstacles() {
  
  if (World.frameCount%200 ===0 ) {
    var obstacles = createSprite(380,372,40,60);
     obstacles.addImage("obstacles",obstaclesImage)
     obstacles.scale = 0.15
     obstacles.y = 347
     obstacles. velocityX = -3
     obstacles.lifetime = 134
  }
  
  
}

function food() {

                
if (World.frameCount%80===0) {
  var banana = createSprite(380,220,20,50);
    banana.addImage("banana",bananaImage)
    banana.scale = 0.1                                   
    banana.velocityX = -4
   
  }
    
  
}