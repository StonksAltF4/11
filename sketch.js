var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var pista

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 pista = createSprite(200,200)
 pista.addImage(pathImg)  
 boy = createSprite(200,200)
 boy.addAnimation('boyImg',boyImg)
 boy.scale = 0.1
// Movendo o fundo 




//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(400,0,100,800)
rightBoundary.visible = false
//Crie Boundary direito 

}


function draw() {
background(0);
pista.velocityY = 4;

if(pista.y > 400){
  pista.y = height/2

}

boy.x = mouseX



// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary)
boy.collide(rightBoundary)

 //Reiniciar o fundo
 



 drawSprites();

 }




