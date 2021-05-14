
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,body

var plinko = [];
var division = [];

var score = 0;
var particle;

var divisionHeight = 300;

gameState = "play"

function setup() {
  createCanvas(480,750);
  engine = Engine.create();
	world = engine.world;

  count = 0;

  ground = new Ground(240,745,480,10)
    
  for(var k = 0; k <= width; k = k + 80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    
  }

  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,50,12))
  }
  for(var j = 15; j <= width-10; j=j + 50){
    plinko.push(new Plinko(j,125,12))
  }
  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,200,12))
  }
  for(var j = 15; j <= width - 10; j=j + 50){
    plinko.push(new Plinko(j,275,12))
  }
  for(var j = 40; j <= width; j=j + 50){
    plinko.push(new Plinko(j,350,12))
  }
  for(var j = 15; j <= width - 10; j=j + 50){
    plinko.push(new Plinko(j,425,12))
  }

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine)

  textSize(15)
  fill("white")
  text("Score = "+ score,12,20)

  textSize(25);
  stroke("grey");
  text(400,20,520)
  text(350,100,520)
  text(200,180,520)
  text(500,260,520)
  text(150,340,520)
  text(450,420,520)

  ground.display();
  
  for (var i = 0; i < division.length; i++) {
    division[i].display();
  }
  for(var k = 0; k < plinko.length; k++) {
    plinko[k].display();
  }
  
 
  if(particle!=null){
    particle.display();
      if (particle.body.position.y > 600) {
        if (particle.body.position.x < 80){
          score=score+400;      
          particle=null;
          if ( count>= 5) gameState ="END";                          
        }
        else if (particle.body.position.x > 80 && particle.body.position.x < 160 ){
          score = score + 350;
          particle=null;
          if ( count>= 5) gameState ="END";
        }
        else if (particle.body.position.x > 160 && particle.body.position.x < 240 ){
          score = score + 200;
          particle=null;
          if ( count>= 5)  gameState ="END";
        }     
        else if (particle.body.position.x > 240 && particle.body.position.x < 320 ){
          score = score + 500;
          particle=null;
          if ( count>= 5)  gameState ="END";
        }   
        else if (particle.body.position.x > 320 && particle.body.position.x < 400 ){
          score = score + 150;
          particle=null;
          if ( count>= 5)  gameState ="END";
        }   
        else if (particle.body.position.x > 400 && particle.body.position.x < 240 ){
          score = score + 450;
          particle=null;
          if ( count>= 5)  gameState ="END";
        }    
            
      }
  }
  if (gameState === "END"){
    textSize(40)
    fill("yellow")
    text("Score = "+ score,120,260)
    text("GAMEOVER",120,320)
  }

}
function mousePressed(){
  
  if(gameState === "play"){
      count = count+1;
      particle = new Particle(mouseX,10,10,10)
  }
}