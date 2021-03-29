var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 10;
var rows = 5;
var score;

function setup(){
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  newParticle();
  var spacing = width/cols;
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols + 1; i++){
      var x =  i*spacing;
      if(j % 4 == 0){
        x += spacing/2;
      }
      var y = spacing+ j *spacing;
      var p = new  Plinko(x,y,10);
      plinkos.push(p);
    }
  }
  
  var b = new Boundary(width/2,height+50,width,100);
  bounds.push(b);

  for(var i = 0; i < cols + 2; i++){
    var x = i * spacing - 30;
    var h = 300;
    var w = 15;
    var y = height - h/2 ; 
    var b = new Boundary(x,y,w,h);
    bounds.push(b); 
  }

  score = 0;

}

function newParticle(){
  var p = new Particle(300,0,10);
  particles.push(p);
}

function draw(){
  //console.log(frameCount);

  textSize(20)
  text("Score : " + score,20,30);

  if(frameCount % 125  == 0){
    newParticle();
  }

  background("yellow");
  Engine.update(engine);

  for(var i = 0;i < particles.length; i++){
  particles[i].show();
  }
  
  for(var i = 0;i < plinkos.length; i++){
    plinkos[i].show();
    }

  for(var i = 0;i < bounds.length; i++){
      bounds[i].show();
      } 
}