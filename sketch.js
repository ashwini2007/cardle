
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,roof1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,500,50,50);
	bob2 = new Bob(360,500,50,50);	
	bob3 = new Bob(420,500,50,50);
	bob4 = new Bob(480,500,50,50);
	bob5 = new Bob(540,500,50,50);
	roof1 = new Roof(400,150,600,50);
	rope1 = new Rope(bob1.body,roof1.body,350,0);
	rope2 = new Rope(bob2.body,roof1.body,350,0);
	rope3 = new Rope(bob3.body,roof1.body,350,0);
	rope4 = new Rope(bob4.body,roof1.body,350,0);
	rope5 = new Rope(bob5.body,roof1.body,350,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



