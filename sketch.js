const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var world, engine;

var ground, ball1, ball2, ball3, ball4, ball5, ball16

//creating Arrays{for plinkos and divisons and particles}

var Plinkos = [];
var PlinkosSize = 300;
var divisons = [];

var divisonHeight = 300;

function setup() {
  createCanvas(480, 800);
  //nameSpacingEngine.....

  engine = Engine.create();
  world = engine.world;

  //BottomGroundObject
  groundBottom = new Ground(230, 800, 500, 20);

   ball1 = new particle(200,20,20,20);

   ball2 = new particle(230,20,20,20);

   ball3 = new particle(250,20,20,20);

   ball4 = new particle(270,20,20,20);

   ball5 = new particle(290,20,20,20);

   ball6 = new particle(300,20,20,20);

   ball7 = new particle(300,20,20,20);

  Engine.run(engine);
}

function draw() {
  background(0);

  for (var k = 0; k <= width; k = k + 80) {

    divisons.push(new Divider(k, height - divisonHeight / 2, 10, divisonHeight))

  };

  for (var k = 0; k < divisons.length; k++) {

    divisons[k].display();

  }

  for (j = 40; j <= width; j = j + 50) {

    Plinkos.push(new plinko(j, 75, 10, 10))
  }

  for (j = 40; j < Plinkos.length; j = j + 50) {

    Plinkos[j].display();

  }

  for (var j = 15; j <= width - 10; j = j + 50) {


    Plinkos.push(new plinko(j, 175, 10, 10))

  }

  for (var j = 15; j <= width - 10; j = j + 50) {


    Plinkos.push(new plinko(j, 275, 10, 10))

  }

  groundBottom.display()
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();

}