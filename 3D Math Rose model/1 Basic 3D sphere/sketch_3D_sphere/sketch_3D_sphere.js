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
  for (let phi=0; phi<=360; phi= phi+5){
    beginShape(POINTS);
    for(let theta=0; theta<=180; theta=theta+5){
      let pX=raadius*sin(phi)*sin(theta);
      let pY=raadius*cos(phi);
      let pZ=raadius*sin(phi)*cos(theta);
      vertex(pX,pY,pZ);
    }
  endShape();
}
  
}

Math.numberRoot = (x, n) => {
  return (((x > 1 || x < -1) && n == 0) ? Infinity : ((x > 0 || x < 0) && n == 0) ? 1 : (x < 0 && n % 2 == 0) ? `${((x < 0 ? -x : x) ** (1 / n))}${"i"}` : (n == 3 && x < 0) ? -Math.cbrt(-x) : (x < 0) ? -((x < 0 ? -x : x) ** (1 / n)) : (n == 3 && x > 0 ? Math.cbrt(x) : (x < 0 ? -x : x) ** (1 / n)));
};
