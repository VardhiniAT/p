function Boundary(x,y,w,h){
    var options = {
        isStatic: true,
        friction:0
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}

Boundary.prototype.show = function(){
    fill("black");
    stroke(0);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rect(0,0,this.w,this.h);
    pop();
}