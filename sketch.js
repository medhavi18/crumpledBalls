
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, dustbin2, dustbin3;
var paper;

var paperIMG, dustbinIMG;

function preload(){
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	dustbin = new Dustbin();
	ground = new Ground(400, 580, 800, 30);
	paper = new Waste(170 ,200, 120);

	Engine.run(engine);
}

function draw() {
  //rectMode(CENTER);
  background(255,255,255);

 /* if(paper.x > 490 && paper.x < 610 && paper.y > 490){
	  text("Well Done!", 100 , 100, textSize(25));
  } */

  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:20,y:-100});
	}
}