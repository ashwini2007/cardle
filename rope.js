class Rope{
        constructor(bodyA,bodyB,offsetX,offsetY)
       { this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
           body1 :bodyA,
           body2: bodyB,
           pointB :{x:offsetX , y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, rope);
    
      }
    display(){
        strokeWeight(4)
        line(bodyA,bodyB,this.offsetX,this.offsetY);
    }
    }
