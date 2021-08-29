const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



var ground

function setup(){
    
    var canvas = createCanvas(1200,400);
    
    
    
    ground = new Ground(600,height,1200,20);
    stand = new Ground(750, 400, 300, 300);

    box1 = new Box(600,400,50,50)




}

function draw(){
    
ground.display();
stand.display();
box1.display();












}
