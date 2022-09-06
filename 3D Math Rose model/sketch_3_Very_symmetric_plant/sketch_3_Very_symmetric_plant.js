function setup() {
  createCanvas(800,  800, WEBGL);
  angleMode(DEGREES);
  stroke(100,180,200);
  strokeWeight(4);
  raadius=220
}

function draw() {
  background(15,30,60);
  orbitControl(4,4,0.5);
  
  for (let r=0; r<=1; r=r+0.03){
    beginShape(POINTS);
    stroke((100-20)*r+20, (180-20)*r+20, r*150+105);
    for(let theta=0; theta<=180*15; theta=theta+5){
      let phi=15*Math.exp(theta/1500);
            //let petal_cut = (3.6*theta%360)/360 ;
      let petal_cut = 1;
      let hanging_r=2*pow(1.3*r-1,2)*pow(r,2)*sin(phi);
      
      let pX=raadius*petal_cut*r*sin(phi)*sin(theta);
      let pY=-raadius*petal_cut*(r*cos(phi)-hanging_r);
      let pZ=raadius*petal_cut*r*sin(phi)*cos(theta);
      vertex(pX,pY,pZ);
    }
  endShape();
 }
}
