
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy , tree,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,stone,ground,slingshot,treeimg
function preload()
{
	boy = loadImage("boy.png");
	treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	stone = new Stone(435,430,30);
	m1 = new Mango(1150,70,30);
	m2 = new Mango(1140,110,32);
	m3 = new Mango(900,120,33);
	m4 = new Mango(1000,130,34);
	m5 = new Mango(1200,115,31);
	m6 = new Mango(1000,125,35);
	m7 = new Mango(1160,140,34);
	m8 = new Mango(1150,170,32);
	m9 = new Mango(1000,180,31);
	m10 = new Mango(1170,180,37);
	m11 = new Mango(1130,200,36);
	m12 = new Mango(1190,210,36);

	//tree = new Tree(1050,480,250,500);
	ground = new Ground(width/2,700,width,20);
	slingshot = new SlingShot(stone.body,{x:235,y:530});
	//Create the Bodies Here.
//	tree.shapeColor("white")


	Engine.run(engine);
  
}


function draw() {
  
  background("grey");
 
// tree.display()
 
 ground.display();
 slingshot.display(); 
 drawSprites();
 imageMode (CENTER)
 image(boy,300,500,200,300);
 image(treeimg,1050,300,500,700); 
 m1.display(); 
 m2.display(); 
 m3.display(); 
 m4.display(); 
 m5.display(); 
 m6.display(); 
 m7.display(); 
 m8.display(); 
 m9.display(); 
 m10.display(); 
 m11.display(); 
 m12.display(); 
 stone.display()

 colide(stone,m1)
 colide(stone,m2)
 colide(stone,m3)
 colide(stone,m4)
 colide(stone,m5)
 colide(stone,m6)
 colide(stone,m7)
 colide(stone,m8)
 colide(stone,m9)
 colide(stone,m10)
 colide(stone,m11)
 colide(stone,m12)
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
 function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function colide(lstone,lmango){
	mamgoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mamgoBodyPosition.x,mamgoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}