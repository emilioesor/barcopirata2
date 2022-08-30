
class Tower {
  constructor(x, y, width, height) {
   var options = {
    isStatic: true
      
    };
   this.image = loadImage("./assets/tower.png");   
   this.width = width;
   this.height = height;
   
  
    this.body = Bodies.rectangle(x,y,this.width,this.height, options);
    World.add(world,this.body);
    }


mostrar() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    //rect(0,0,this.width,this.height);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}
