
class Cannon {

 constructor(x, y, width, height, angle) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.angle = angle;
 
  //imagen base
  this.image1 = loadImage("./assets/cannon_base.png");
  //imagen disparador
  this.image2 = loadImage("./assets/CANON.png");
 }


 mostrar(){

 if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) { 
     this.angle += 0.02; }

 if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
     this.angle -= 0.02; }

  //rectangulo
  //rect(-10, -20, this.width, this.height);
  //semicirculo
  //arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
  //imagenes
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  imageMode(CENTER);
  //cañon
  image(this.image2,0,0,this.width,this.height);
  pop();
  //base
  image(this.image1,70,20,200,200,PI, TWO_PI);
  
 }

}