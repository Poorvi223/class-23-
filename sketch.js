const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine
var box1,box2
var ground1

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  box1 = new box(200,50,50,70)
  ground1 = new ground(400,390,800,20);
  box2 = new box(250,100,80,40);
}

function draw() {
  background("black");
  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();

}