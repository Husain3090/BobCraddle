class Chain{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
           

        }
        this.Chain = Constrant.create(options)
               
        World.add(world, this.Chain);
      }
      display(){
        line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x+this.offsetX,this.Chain.bodyB.position.y+this.offsetY)
        
      }
}