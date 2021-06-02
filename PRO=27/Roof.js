class Roof{
    constructor(x,y,w,h) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.h = h
        this.w = w
               
        World.add(world, this.body);
      }
      display(){
      //  var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("skyblue");
        rect( 0, 0,this.w,this.h);
        pop();
      }
}