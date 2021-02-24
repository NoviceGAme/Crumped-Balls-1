
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(100,100,70,70)
	ground=new Dustbin(400,650,800,20)

	plank=new Dustbin(600,575,20,150)
	plank2=new Dustbin(750,575,20,150)
	plank3=new Dustbin(685,640,150,20) 

	Engine.run(engine);
}


function draw() {


  background(0);
  paper1.display();
  plank.display();
  plank2.display();
  plank3.display();
  
  ground.display();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Body.applyForce(paper1.ball,paper1.ball.position,{x:85 , y:-85})
	}

}



