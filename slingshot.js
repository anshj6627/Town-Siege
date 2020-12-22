class Slingshot{
    constructor(polygon,pointB){
var options={
    var bodyA: polygon,
    var pointB: pointB,
    stiffness:0.04,
    length:8
}
this.sling=Matter.Constraint.create(options);
World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var a=this.sling.bodyA.position;
            var b= this.sling.pointB;
            line(a.x, a.y, b.x, b.y); 
        }
    }
}