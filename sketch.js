const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var balas_m = [];
var boat_animation = [];
var boat_data;
var boat_sheet;


var tower;

var matriz = [1,3,5]
console.log (matriz[2]);

var ground;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boat_data = loadJSON("./assets/boat/boat.json");
  boat_sheet = loadImage("./assets/boat/boat.png");


}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
   
  angle = -PI / 2;

  ground = new Ground(0, height - 1, width * 2, 1);

  cannon = new  Cannon (180,110,130,70,angle); 

  bala = new  Bala (cannon.x, cannon.y);

  torre = new Tower (150,350,160,310);
  torre2 = new Tower (800,270,120,230);

  barco = new Barco(width, height-100, 200, 200, -100);
  
  var boatFrames = boat_data.frames;
  for (var i = 0; i < boatFrames.length; i++) { 
    var pos = boatFrames[i].position; 
    var img = boat_sheet.get(pos.x, pos.y, pos.w, pos.h);
     boat_animation.push(img); }
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);

  ground.mostrar();

  Matter.Body.setVelocity(barco.body,{
    x: -0.9,
    y: 0
  });


  for(var i = 0; i<balas_m.length; i++){
    showBalas (balas_m[i], i);
  }

  

  torre.mostrar();
  torre2.mostrar();
   
  cannon.mostrar();
  //bala.mostrar();
 
  barco.mostrar();

  

  
}

function keyReleased()
{
  
 if(keyCode === DOWN_ARROW){
  balas_m[balas_m.length -1].disparo();
 }

}

function keyPressed(){

  if(keyCode === DOWN_ARROW){
    var bala = new Bala(cannon.x, cannon.y);
    balas_m.push(bala);
  }
 
}

function showBalas(bala,index){
bala.mostrar();

if (bala.body.position.x >= width || bala.body.position.y >= height - 50) { 
  Matter.World.remove(world, bala.body);
  balas_m.splice(index, 1);
}

}

function showBoats() { 
  if (barco_m.length > 0) { 
    if ( barco_m.length < 4 && barco_m[barco_m.length - 1].body.position.x < width - 300 ) 
    { 
    var positions = [-40, -60, -70, -20]; 
    var position = random(positions); 
    var boat = new Barco( width, height - 100, 170, 170, barco_pos, boat_animation ); 
    barco_m.push(boat); 
  } 
  for (var i = 0; i < barco_m.length; i++) { 
    Matter.Body.setVelocity(barco_m[i].body, 
      { x: -0.9, 
        y: 0 }); 
        barco_m[i].mostrar();
         barco_m[i].animacion(); 
         var collision = Matter.SAT.collides(tower.body, barco_m[i].body); 
         if (collision.collided && !barco_m[i].isBroken) 
         { isGameOver = true; gameOver(); }
         } }
          else { var barco = new Barco(width, height - 60, 170, 170, -60, boat_animation);
             barco_m.push(barco); } }
