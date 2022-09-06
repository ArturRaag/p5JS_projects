var step=5;
  let X=0;
  let Y=0;
  let Z=0;
let angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  stroke(100,180,200);
  strokeWeight(4);
  tekst=createP("");
  tekst.position(100 ,1);
  tekst.style("color","white");
  tekst.style("font-size: 170px");
  
  
  let fov= PI/3;
  let cameraZ=(height/2.0)/tan(fov/2.0);
  perspective(fov, width/height, cameraZ/10000.0, cameraZ*10000);
}

function draw(){
  new_step();
  
  
  
  background(15,30,60);
  orbitControl(4,4,0.01);
  tekst.html("Eksleja ");
  rotateY(angle);
  rotateZ(angle*0.5);
  beginShape(POINTS);
  for (i=0;i<=empty_vec.length-1;i++){
    vertex(empty_vec[i].x,empty_vec[i].y, empty_vec[i].z);
  }
  endShape();
  angle=angle+0.01;
  camera(0, 0, 300 - sin(frameCount * 0.001) * 200, 0, 0, 0, 0, 1, 0);
  if (empty_vec.length >=100000){
      empty_vec=[];
      X=0;
      Y=0;
      Z=0;
    }
}

empty_vec=[]
function new_step(){
  
    direction=random(["up","down","left","right","forward","back"]);
    if (direction=="up"){
      X=X+step;
    } else if (direction == "down"){
      X=X-step;
    } else if (direction=="left"){
      Y=Y-step;
    } else if (direction=="right"){
      Y=Y+step;
    } else if (direction=="forward"){
      Z=Z+step;
    } else if (direction=="back"){
      Z=Z-step;
    }
  vek=createVector(X,Y,Z);
  empty_vec.push(vek);
}
