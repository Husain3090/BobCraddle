
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrant = Matter.Constraint
const Render = Matter.Render

var bob1, bob2, bob3, bob4, bob5
var roof1
var chain1, chain2, chain3, chain4, chain5
var world

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width / 2, height / 4, width / 4, 20)
	bob1 = new Bob(width / 2 - 40 * 2, height / 4 + 500, 40);
	bob2 = new Bob(width / 2 - 40, height / 4 + 500, 40);
	bob3 = new Bob(width / 2, height / 4 + 500, 40);
	bob4 = new Bob(width / 2 + 40, height / 4 + 500, 40);
	bob5 = new Bob(width / 2 + 40 * 2, height / 4 + 500, 40);

	// var render = Render.create({
	// 	element: document.Body,
	// 	engine: engine,
	// 	options: {
	// 		width: 1200, height: 700,
	// 		wireframes: false
	// 	}
	// })
	chain1 = new Chain(bob1.body, roof1.body, -40 * 2, 0)
	chain2 = new Chain(bob2.body, roof1.body, -40, 0)
	chain3 = new Chain(bob3.body, roof1.body, 0, 0)
	chain4 = new Chain(bob4.body, roof1.body, 40, 0)
	chain5 = new Chain(bob5.body, roof1.body, 40 * 2, 0)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	roof1.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	drawSprites();

}



