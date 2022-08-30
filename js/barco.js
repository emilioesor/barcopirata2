class Barco{

 constructor(x,y, width, height, barco_pos, boat_animation){
    var options = {
     restitution: 0.8,
     friction: 1.0,
     density:  1.8,
     
    }

    this.body =Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/boat.png");
    World.add(world,this.body)
    this.barco_pos = barco_pos;
    this.animation = boat_animation;
 }

animacion()
{
  this.speed += 0.05%1.1;

}

mostrar()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    //var index = floor(this.speed%this.animation.length);
    var index = floor(this.speed);
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index],0,this.barco_pos,this.width,this.height);
    pop();
}
}