class Bala {

 constructor(x, y) {
 this.r = 40;
 var options = {
   restitution: 0.8,
   friction: 1.0,
   density:  1.8,
   isStatic : true
 };

 this.body = Bodies.circle(x,y,this.r,options);
 World.add(world, this.body);
 this.image = loadImage("./assets/cannonball.png");
  this.trayectoria = [];

 }

 disparo(){
 var velocity = p5.Vector.fromAngle(cannon.angle); 
 velocity.mult(20); 
 Matter.Body.setStatic
 (this.body, false);
 Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
 }
 
 mostrar(){

    var pos = this.body.position;
    var angle = this.body.angle;
    
     console.log(pos);
     
     if(this.body.velocity.x > 0 && this.body.position.x > 300){
      var position = [this.body.position.x, this.body.position.y];        
      this.trayectoria.push(position);
     }
     
     for(var i = 0; i<this.trayectoria.length;i++){
     image(this.image,this.trayectoria[i][0], this.trayectoria[i][1], 6,6);
     }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
 }

}