var jardim,coelho;
var imagemdojardim,imagemdocoelho;
var imgvermelha,imglaranja,imgmaca;
var folhavermelha,folhalaranja,maca;
var aleatorio;

function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
 
  imgvermelha = loadImage("redImage.png");
  imglaranja = loadImage("orangeLeaf.png");
  imgmaca = loadImage("apple.png");
  
  
  
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);

// Criando o menino corredor
coelho = createSprite(180,340,30,30);
coelho.scale =0.10;
coelho.addImage(imagemdocoelho);
}


function draw() {
  background(0);
  coelho.x=World.mouseX
  
  
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  
aleatorio=Math.round(random(1,3));
  
  if(frameCount % 80 == 0 ){
if(aleatorio === 1 ){
  
  criarmaca()
  
}
   else if(aleatorio === 2 ){
   criarlaranja()    
     
   }
    else{
      criarvermelha()
    }
  }

  
  
  drawSprites();
}
function criarmaca(){
  maca=createSprite(random(50,350),40,10,10)
 maca.addImage(imgmaca)
  maca.velocityY=3
  maca.scale=0.1
  maca.lifetime=110
}
function criarlaranja(){
 folhalaranja=createSprite(random(50,350),40,10,10)
 folhalaranja.addImage(imglaranja)
 folhalaranja.velocityY=3
 folhalaranja.scale=0.1
 folhalaranja.lifetime=110
}
function criarvermelha(){
 folhavermelha=createSprite(random(50,350),40,10,10)
 folhavermelha.addImage(imgvermelha)
 folhavermelha.velocityY=3
 folhavermelha.scale=0.08
 folhavermelha.lifetime=110
}
