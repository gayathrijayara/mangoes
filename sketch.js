
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const cons = Matter.Constraint;
var boy;
function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groung=new Ground(600,580,1200,20);
stone=new Stone(150,420);
mango1=new Mango(720,200);
mango2=new Mango(820,100);
mango3=new Mango(950,100);
mango4=new Mango(875,200);
mango5=new Mango(980,175);
mango6=new Mango(1000,250);	
mango7=new Mango(800,250);
mango8=new Mango(1100,200);
launcher=new Launcher(stone.body,{x:150,y:420});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  image(boy,100,345,250,300);
  image(tree,500,6,600,600);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  launcher.display();
  detectcollusion(stone,mongo1);
  detectcollusion(stone,mongo2);
  detectcollusion(stone,mongo3);
  detectcollusion(stone,mongo4);
  detectcollusion(stone,mongo5);
  detectcollusion(stone,mongo6);
  detectcollusion(stone,mongo7);
  detectcollusion(stone,mongo8);
  drawSprites();
 
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    launcher.fly();
    }

function keyPressed(){
    if(keyCode ==UP_ARROW){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
    }
}
function  mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
	}}
	function detectcollusion(stones,mangoes){
	mangoBodyPosition=mangoes.body.setPosition
	stoneBodyPosition=stones.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=100){
		Matter.Body.setStatic(mangoes.body,false)
	}
}
