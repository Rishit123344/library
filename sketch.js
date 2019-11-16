var movingRect,fixedRect;

function setup() {

  createCanvas(1200,800);
movingRect=createSprite(400,200,50,80);
fixedRect=createSprite(600,400,80,50);
movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (isTouching(movingRect,fixedRect))
 {
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";
 }
 else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
 }
  drawSprites();
}
