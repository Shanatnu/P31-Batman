const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1;
var drops=[];
var maxdrops=100;
var thunder1,thunder2,thunder3,thunder4;
var ball;


function preload(){
 // polygon_img=loadImage("polygon.png");
 thunder1= loadImage("1.png");
 thunder2= loadImage("2.png");
 thunder3= loadImage("3.png");
 thunder4= loadImage("4.png");




}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
 
  //level one
  drop1 = new Drop(300,275,1);
 // console.log(block1);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  


 // for(var i=0;i<maxdrops;i++){
 //  drops.push(new createDrop(random(0,400),random(0,400)));
 // }

}
function draw() {
  background("black"); 
  
  Engine.update(engine);

  imageMode(CENTER)
  image(thunder1,100,100,200,200);
  image(thunder2,600,150,200,200);
  image(thunder3,450,100,200,200);
  image(thunder4,300,100,200,200);
  
  
  drop1.display();
 
}