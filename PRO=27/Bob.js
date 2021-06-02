class Bob{
    constructor(x,y,r) {
        var options = {
            'restitution':1.0,
            'friction':0,
            'density':0.8,
            isStatic:false

        }
        this.body = Bodies.circle(x,y,(r)/2, options);
        this.r = r
               
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("red");
        ellipse( 0, 0,this.r,this.r);
        pop();
      }
}