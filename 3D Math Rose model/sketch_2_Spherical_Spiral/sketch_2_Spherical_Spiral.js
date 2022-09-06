function setup() {
  createCanvas(800,  800, WEBGL);
  angleMode(DEGREES);
  stroke(100,180,200);
  strokeWeight(4);
  raadius=220
}

function draw() {
  background(15,50,90);
  orbitControl(4,4,0.5);
    beginShape(POINTS);
    for(let theta=0; theta<=180; theta=theta+0.1){
      let pX=raadius*sin(theta)*sin(theta*12);
      let pY=raadius*cos(theta);
      let pZ=raadius*sin(theta)*cos(theta*12);
      vertex(pX,pY,pZ);
    }
  endShape();
}
