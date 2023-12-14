const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var blockimg,pigimg,backgroundimg,tntimg,woodimg,shotimg,stoneimg,angerBirdimg
var bg
var ground
var box
var shoot
var shootting
var slimshot
var bird
function preload(){
  backgroundimg=loadImage("background.png")
  shotimg=loadImage("shoot.png")
  

}
function setup(){
  createCanvas(1350,600)
  engine = Engine.create();
  world = engine.world;
  var option={isStatic:true}
  ground=Bodies.rectangle(675,580,1350,20,option)
  World.add(world,ground)
  

  box=Bodies.rectangle(200,470,400,200,option)
  World.add(world,box)

slimshot= new Slimshot()
bird = new Bird(90,190,90,90)


}
function draw(){
  background(backgroundimg)
  Engine.update(engine)
  fill("brown") 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1350,20)
  rect(box.position.x,box.position.y,400,200)

slimshot.display()
bird.display()
//drawSprites()

}