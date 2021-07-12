const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options = {
		restitution : 1.2
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(340,300,15,bob_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(370,300,15,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,300,15,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(430,300,15,bob_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(460,300,15,bob_options);
	World.add(world,bob5);
	
	rope1 = new Bob(bob1,roof,340,100);
	rope2 = new Bob(bob2,roof,370,100);
	rope3 = new Bob(bob3,roof,400,100);
	rope4 = new Bob(bob4,roof,430,100);
	rope5 = new Bob(bob5,roof,460,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ellipse(bob1.position.x,bob1.position.y,30);
  ellipse(bob2.position.x,bob2.position.y,30);
  ellipse(bob3.position.x,bob3.position.y,30);
  ellipse(bob4.position.x,bob4.position.y,30);
  ellipse(bob5.position.x,bob5.position.y,30);

  rect(roof.position.x,roof.position.y,230,20);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-0.02, y: 0});
		console.log(bob1.force);
	}
}