var boy ;
var score=0;
var ground;
var backgroundImage,background;
var fireballImage,fireballGroup;
var boyImage;
var waterballImage,waterballGroup;
var PLAY=1 , END=0 , gameState=1;

function preload (){
backgroundImage=loadImage("background.jpg")
fireballImage=loadImage("fireball1.png")
boyImage=loadAnimation("boysprite1.png" , "boysprite2.png")
waterballImage=loadImage("waterball1.png")
}

function setup (){
  createCanvas (900,500)
  background=createSprite(0,0,900,400)
  background.addImage("bg",backgroundImage)
  background.scale=3

  boy=createSprite(75,385,30,20)
  boy.addAnimation("run",boyImage)
  boy.scale=0.7
  boy.setCollider("circle",-55,7,65)
  
  ground=createSprite(450,390,900,10)
  ground.visible=false

  fireballGroup=createGroup()
  waterballGroup=createGroup()
}
function draw (){
 // background("red")

  background.velocityX=-3
  if (background.x<0){
    background.x=background.width/2
  }

  


  if(gameState===PLAY){

  if(keyDown("space")&& boy.y>=300){
    boy.velocityY=-15
    
  }
  boy.velocityY=boy.velocityY+0.5
  
  if(fireballGroup.isTouching(boy)){
    gameState=END
  }

  if(waterballGroup.isTouching(boy)){
    waterballGroup.destroyEach()
score=score+5
  }
  
  obstacle();
  waterball();

  
  drawSprites();
  textSize(20)
  fill("yellow")
  text("Score:"+score,700,50);

  }
  if(gameState===END){
    boy.velocityX=0

    textSize(50)
    fill("Yellow")
    text("GAME OVER",350,200)

  }
  
  boy.collide(ground)
}
function obstacle(){
  if(frameCount%100===0){
  fireball1=createSprite(900,350,10,15)
  fireball1.velocityX=-(5+score/10)
  fireball1.addImage(fireballImage)
  fireball1.scale=0.2
  fireball1.lifetime=180
  fireballGroup.add(fireball1)
  }
}

function waterball(){
  if(frameCount%150===0){
  waterball1=createSprite(900,350,10,15)
  waterball1.velocityX=-5
  waterball1.addImage(waterballImage)
  waterball1.scale=0.1
  waterball1.lifetime=180
  waterballGroup.add(waterball1)
  }
}