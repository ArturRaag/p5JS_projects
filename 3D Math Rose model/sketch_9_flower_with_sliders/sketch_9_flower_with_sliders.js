

function setup() {
  createCanvas(800,  800, WEBGL);
  angleMode(DEGREES);
  stroke(100,180,200);
  strokeWeight(4);
  raadius=150;
  
  createDiv();
  nurk_phi_txt=createP("Nurk phi");
  nurk_phi_txt.style("margin-right: 20px");
  lehekeste_kõrgus=createSlider(1,25,15);
  
  createDiv();
  lõike_sügavus_txt=createP("Lehe lõike sügavus");
  lõike_sügavus_txt.style("margin-right: 20px");
  lõike_sügavus=createSlider(1,14,3);
  
  createDiv();
  lehe_otsad_txt=createP("Lehe otsa kuju");
  lehe_otsad_txt.style("margin-right: 20px");
  lehe_otsad=createSlider(1,4,2);

  createDiv();
  lehe_arv_txt=createP("Lehtede arv ja/või kattuvus");
  lehe_arv_txt.style("margin-right: 20px");
  lehe_arv=createSlider(1,25,6,0.1);
  
  createDiv();
  rippumise_slider_txt=createP("Lehe rippumine");
  rippumise_slider_txt.style("margin-right: 20px");
  rippumise_slider=createSlider(-4,6,2,0.1);
  
}

function draw() {
  background(15,30,60);
  orbitControl(4,4,0.01);
  
  lehe_kõrgus=lehekeste_kõrgus.value();
  lehe_lõike_sügavus=lõike_sügavus.value();
  lehe_otsa_kuju_parameeter=lehe_otsad.value();
  lehetede_arv=lehe_arv.value();
  rippumise_coef=rippumise_slider.value();
  
  
  for (let r=0; r<=1; r=r+0.01){
    beginShape(POINTS);
    stroke((100-20)*r+20, (180-20)*r+20, r*150+105);
    for(let theta=0; theta<=180*15; theta=theta+2){
      let phi=lehe_kõrgus*Math.exp(theta/1500);
      let petal_cut = 1-(1/lehe_lõike_sügavus)*pow(1-(lehetede_arv*theta%360)/180,lehe_otsa_kuju_parameeter) ;
      let hanging_r=rippumise_coef*pow(1.3*r-1,2)*pow(r,2)*sin(phi);
      
      let pX=raadius*petal_cut*r*sin(phi)*sin(theta);
      let pY=-raadius*petal_cut*(r*cos(phi)-hanging_r);
      let pZ=raadius*petal_cut*r*sin(phi)*cos(theta);
      vertex(pX,pY,pZ);
  }
  endShape();
 }
 //raadius=raadius+0.5;
}
