var gun, bullets, man;


function setup() {
  createCanvas(windowWidth,windowHeight);

 gun = createSprite(100,windowHeight/2,80,80);
 gun.velocityY=10;
}

function draw() {
  background("black"); 
  
  
  edges=createEdgeSprites();
  gun.bounceOff(edges);

  drawSprites();
}