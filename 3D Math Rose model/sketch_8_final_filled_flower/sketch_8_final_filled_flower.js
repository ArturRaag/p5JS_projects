let v=[];
let cols =450;
let rows=30;

let t_D = 180*15/cols;
let r_D = 1/rows;


function setup() {
  createCanvas(800,  800, WEBGL);
  angleMode(DEGREES);
  //stroke(100,180,200);
  //strokeWeight(4);
  noStroke();
  raadius=220;
}

function draw() {
  background(15,30,60);
  orbitControl(4,4,0.01);
  
   for (let r=0; r<=rows; r=r+1){
    
    v.push([]);
    stroke((100-20)*r*r_D+20, (180-20)*r*r_D+20, r*r_D*150+105);
    for(let theta=0; theta<=cols; theta=theta+1){
      let phi=15*Math.exp(theta*t_D/1500);
      let petal_cut = 1-(1/3)*pow(1-(5.65*theta*t_D%360)/180, 2) ;
      let hanging_r=2*pow(1.3*r*r_D-1,2)*pow(r*r_D,2)*sin(phi);
      
      let pX=raadius*petal_cut*r*r_D*sin(phi)*sin(theta*t_D);
      let pY=-raadius*petal_cut*(r*r_D*cos(phi)-hanging_r);
      let pZ=raadius*petal_cut*r*r_D*sin(phi)*cos(theta*t_D);
     
     let pos=createVector(pX, pY, pZ);
     v[r].push(pos);
    }
 }
  

     for (let r=0; r<v.length; r=r+1){
         for (let theta=0; theta < v[r].length; theta=theta+1){
            if (r<v.length-1 && theta < v[r].length-1){
              fill( r*r_D*150+105, (100-20)*r*r_D+20, (180-20)*r*r_D+20, r*r_D*150+105);
              noStroke();
              beginShape();
              vertex(v[r][theta].x, v[r][theta].y, v[r][theta].z);
              vertex(v[r+1][theta].x, v[r+1][theta].y, v[r+1][theta].z);
              vertex(v[r+1][theta+1].x, v[r+1][theta+1].y, v[r+1][theta+1].z);
              vertex(v[r][theta+1].x, v[r][theta+1].y, v[r][theta+1].z);
              endShape(CLOSE);
           }
         }
   }
v=[];
}


//function init_flower(){
//    for (let r=0; r<=rows; r=r+1){
    
//     v.push([]);
//    stroke((100-20)*r*r_D+20, (180-20)*r*r_D+20, r*r_D*150+105);
//    for(let theta=0; theta<=cols; theta=theta+1){
//      let phi=15*Math.exp(theta*t_D/1500);
//      let petal_cut = 1-(1/3)*pow(1-(5.65*theta*t_D%360)/180, 4) ;
//      let hanging_r=2*pow(1.3*r*r_D-1,2)*pow(r*r_D,2)*sin(phi);
      
//      let pX=raadius*petal_cut*r*r_D*sin(phi)*sin(theta*t_D);
//      let pY=-raadius*petal_cut*(r*r_D*cos(phi)-hanging_r);
//      let pZ=raadius*petal_cut*r*r_D*sin(phi)*cos(theta*t_D);
     
//     let pos=createVector(pX, pY, pZ);
//     v[r].push(pos);
//    }
// }
//     for (let r=0; r<v.length; r=r+1){
//         for (let theta=0; theta < v[r].length; theta=theta+1){
//            if (r<v.length-1 && theta < v[r].length-1){
//              beginShape();
//              vertex(v[r][theta].x, v[r][theta].y, v[r][theta].z);
//              vertex(v[r+1][theta].x, v[r+1][theta].y, v[r+1][theta].z);
//              vertex(v[r+1][theta+1].x, v[r+1][theta+1].y, v[r+1][theta+1].z);
//              vertex(v[r][theta+1].x, v[r][theta+1].y, v[r][theta+1].z);
//              endShape(CLOSE);
//           }
//         }
//   }
//   v=[];
//}
