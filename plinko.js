class Plinko {
    constructor(x,y,r){
      var options = {
        isStatic: true,
        'restitution':0.3,
        'friction':1.0,
        'density':0.7
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      World.add(world, this.body);
      
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      noStroke;
      fill("white")
      ellipseMode(CENTER);
      circle(0,0, this.radius, this.radius);
      pop();
    }
  }
  