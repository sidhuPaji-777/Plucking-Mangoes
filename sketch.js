const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree, stone, player, rope;
var mango1, mango2, mango3, mango4, mango5, mango6;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// Creaitng Player
	player = new Player(150, height/2+252, 20, 70);

	// Creaitng Tree
	tree = new Tree(1070, height/2+180, 25, 250);

	// Createing Stone
	stone = new Stone(142, height/2+200, 35);

	// Creating Rope
	rope = new Rope(stone.body, {x:105,y:535});

// Creaing MANGOS
	mango1 = new Mango(970, 300, 50);
	mango2 = new Mango(1010, 200, 50);
	mango3 = new Mango(1080, 290, 50);
	mango4 = new Mango(1080, 120, 50);
	mango5 = new Mango(1140, 200, 50);
	mango6 = new Mango(1190, 300, 50);


	// Creating ground
	ground = new Ground(width/2, height/2+310, 1400, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(153, 255, 255));
  textSize(30);
  fill("Black")
  text("Press Space to get a second chance", 100, 50);
//   text(mouseX + ',' + mouseY, 30, 45);

	player.display();
	tree.display();
	stone.display();
	rope.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	ground.display();

// Detecting collision with
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	
  drawSprites(); 
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed()
{
if(keyCode===32)
  {
	Matter.Body.setPosition(stone.body, {x:105,y:535});
    rope.attach(stone.body);
  }
}

// Creating detect collision function
function detectCollision(lstone, lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
		console.log("deticion");
		Matter.Body.setStatic(lmango.body, false);
	}
}