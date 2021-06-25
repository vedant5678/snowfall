const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowflake,snowflakeimg
var bgimg

function preload(){
  bgimg=loadImage("snow3.jpg")
  snowflakeimg=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgimg);  
  createSnowflake()
  drawSprites();
}
function createSnowflake(){
if(frameCount%10===0){
  snowflake=createSprite(random(0,800),0,50,50)
  snowflake.velocityY=4
  snowflake.velocityX=-2
  snowflake.addImage(snowflakeimg)
  snowflake.scale=0.1
}
}