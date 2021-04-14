const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine
var img
function preload(){
	 img = loadImage("dustbingreen.png")
}

function setup(){
	var canvas = createCanvas(1200,600)
	engine = Engine.create()
	world = engine.world
	ground1 = new Ground(600,595)
	dustbin1 = new Dustbin(1000,531,10,120)
	dustbin2 = new Dustbin (850,531,10,120)
    dustbin3 = new Dustbin (925,585,140,10)
	trash = new Trash(100,592)
}

function draw(){
	background("white")
	Engine.update(engine)
	ground1.display()
	dustbin1.display()
	dustbin2.display()
	dustbin3.display()   
	image(img,840,455,172,135)    
	trash.display()
	
}
	


 function keyPressed(){
 	if (keyCode === UP_ARROW){
 		Matter.Body.applyForce(trash.body,trash.body.position,{x:30,y:-90})
 	}
 }