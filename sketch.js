const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine, world;
function setup() {
 var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  floor = new GROUND(550,650,300,15);
  block1 = new BLOCK(430,620,40,40);
  block2 = new BLOCK(470,620,40,40);
  block3 = new BLOCK(510,620,40,40);
  block4 = new BLOCK(550,620,40,40);
  block5 = new BLOCK(590,620,40,40);
  block6 = new BLOCK(630,620,40,40);
  block7 = new BLOCK(670,620,40,40);

  block8 = new BLOCK(450,600,40,40);
  block9 = new BLOCK(490,600,40,40);
  block10 = new BLOCK(530,600,40,40);
  block11 = new BLOCK(570,600,40,40);
  block12 = new BLOCK(610,600,40,40);
  block13 = new BLOCK(650,600,40,40);
  block14 = new BLOCK(470,580,40,40);
  block15 = new BLOCK(510,580,40,40);
  block16 = new BLOCK(550,580,40,40);
  block17 = new BLOCK(590,580,40,40);
  block18 = new BLOCK(630,580,40,40);
  block19 = new BLOCK(490,560,40,40);
  block20 = new BLOCK(530,560,40,40);
  block21 = new BLOCK(570,560,40,40);
  block22 = new BLOCK(610,560,40,40);
  block23 = new BLOCK(510,540,40,40);
  block24 = new BLOCK(550,540,40,40);
  block25 = new BLOCK(590,540,40,40);
  block26 = new BLOCK(530,520,40,40);
  block27 = new BLOCK(570,520,40,40);
  block28 = new BLOCK(550,490,40,40);
  ball1 = new BALL(100,100,40,40);
  chain1 = new CHAIN(ball1.body,{x:100,y:100});

  Engine.run(engine);
}
function draw() {
 background(99);  
 Engine.update(engine);
 
textSize(35);
fill("red");
text("SCORE :" + score,600,50);
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
block26.score();
block27.score();
block28.score();
 floor.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 block28.display();
 ball1.display();
 getBackgroundImg();
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  chain1.fly();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.dateTime;
  var hour = dateTime.slice(11,13);
  if(hour >= 6 && hour <=19){
  background(247,247,1);
  }else{
    background(8,8,56);
  }
}