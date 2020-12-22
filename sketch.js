const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var a;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var slingshot;

function preload(){
a = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot=new Slingshot(polygon.body,{x:100,y:100});
    ground = new Ground(600,height,1200,20);
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);
    block16=new Block(390,155,30,40);
}
function draw(){
    Engine.update(engine);
    ground.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
slingshot.display();
polygon.display();
}
function mouseDragged(){

}
function mouseReleased(){

}