var volume;
var minSize;
var maxSize;
var numMax = 300;
var arr=[]; //array che contiene gli oggetti, iniz vuoto
var valore=0;
var nuoviFiocchi = false;
var soglia = 10;
var babbo;

function preload() {
  babbo = loadImage('./assets/Babbo.png')
    
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();   
    angleMode(DEGREES);
} // FINE SETUP

function draw() {
	var volume = mic.getLevel();
    valore++;
	background(200,200,245);
    push();
    
    noStroke();
    fill(230);
    rect(0,12*height/17-3,width,5*height/17);
    fill(245);
    rect(0,12*height/17,width,5*height/17);
    pop();
    var size = map(volume, 0, 1, 15, 100);
    
    push();
    rotate(size/15);
    imageMode(CENTER);
    image(babbo,width/2,height/2,height/2,height/2);
    push();
	translate(width / 2, 9*height / 19);
    fill(30);
    ellipse(0, 0, size,size/2);
	pop();
    pop();
    
    
	if(nuoviFiocchi==true) {
    //DISEGNA GLI OGGETTI E LI MOSTRA 
   
    for(var i=0;i<=numMax;i++) {
   arr[i].display();
    arr[i].move();
    } //FINE OGGETTO
    } //FINE IF

    //TRIGGER VOLUME
var trigger = map(volume,0,1,0,100)
    if(trigger>=soglia) {
       creaFiocchi();
       } // FINE TRIGGER VOLUME
    console.log(trigger)
    //console.log(valore, volume,nuoviFiocchi,trigger);
    push();
    textAlign(CENTER);
    textFont('Kaushan Script');
    textSize(50);
    textStyle(BOLD);
     fill("#d15757");
    text("Merry Christmas!",width/2+3,7*height/8+3);
    fill("#e0d445");
    text("Merry Christmas!",width/2,7*height/8);
   
    pop();
} // FINE DRAW
    

function Neve() {
    this.radius = 10*random(0,2);
    
    this.x=random()*width;
    this.y=0;
    
    this.incrementX =random(-1,1)*1.5;
    this.incrementY =random();
    
    this.display = function() {
        push();
         //Oggetto da mostrare
        fill(255);
        stroke(220);
        ellipse(this.x,this.y,this.radius);
        pop();
    } // FINE DISPLAY
    
    this.move = function() {
    this.x += this.incrementX;
    this.y += this.incrementY; 
    this.incrementY += 0.02*random(); //per le accel
        if(this.y>=12*height/17+random(-3,10)) {
            this.incrementY=0;
            this.incrementX=random(-1,1)/5}
    } // FINE MOVE
    
    
} // FINE OGGETTO
    

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function creaFiocchi() {
    if(valore>=20) {
    //CREA GLI OGGETTI
    for(var i=0;i<=numMax;i++) {
    arr.push(new Neve()); //crea un oggetto e lo aggiunge in arr 
   
    } //FINE CREA OGGETTI
    nuoviFiocchi=true;
        
        } //fine if
}