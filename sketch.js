const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var backgroundImg,platform;
var slingShot;
var stand;
var polygon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   stand = new Stand(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

box1 = new Box(330,235,30,40);
box2 = new Box(360,235,30,40);
box3 = new Box(30,235,30,40);
box4 = new Box(420,235,30,40);
box5 = new Box(450,235,30,40);

box6 = new Box(360,195,30,40);
box7 = new Box(390,195,30,40);
box8 = new Box(420,195,30,40);

box9 = new Box(390,155,30,40);

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   this.image = loadImage("polygon.png");
   imageMode(CENTER);
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
