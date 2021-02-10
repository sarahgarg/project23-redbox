var helicopterIMG, helicopterSprite, packageSprite,rect1sprite, rect2sprite,rect3sprite,packageIMG;
var packageBody,ground,rect1body,rect2body, rect3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-32, width,10);
	groundSprite.shapeColor=color(255)

 rect1sprite=createSprite(380,height-45,200,20);
 rect1sprite.shapeColor=color("red");
 rect2sprite=createSprite(280,height-85,20,100);
 rect2sprite.shapeColor=color("red");
 rect3sprite=createSprite(480,height-85,20,100);
 rect3sprite.shapeColor=color("red");
 
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
   rect1body= Bodies.rectangle(280,345,200,20,{isStatic:true})
   World.add(world,rect1body);
   rect2body= Bodies.rectangle(180,220,20,100,{isStatic:true})
   World.add(world,rect2body);
   rect3body= Bodies.rectangle(380,220,20,100,{isStatic:true})
   World.add(world,rect3body);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed()
 {
 if (keyCode === DOWN_ARROW)
  {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	  Matter.Body.setStatic(packageBody,false);
	
    
  }
}

