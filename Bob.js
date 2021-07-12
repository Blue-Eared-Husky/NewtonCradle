class Bob{
    constructor(bodyA,bodyB,x,y){
        this.x = x;
        this.y = y;
        this.bodyA = bodyA;
        var rope_options = {
            bodyA : this.bodyA,
            //bodyB : bodyB,
            pointB : {x : this.x, y : this.y}
        }
        this.rope = Matter.Constraint.create(rope_options);
        World.add(world,this.rope);
    }

    display(){
        push();
        strokeWeight(2);
        line(this.x,this.y,this.bodyA.position.x,this.bodyA.position.y);
        pop();
    }
}