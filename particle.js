function Particle(x,y,r){
    var options = {
        //isStatic: true,
        friction: 0,
        restitution:0.5
    }
    x+= random(-1,1);
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
}

Particle.prototype.show = function(){
    fill(255,0,0);
    stroke(0,0,255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0,0,this.r*2);
    pop();
}