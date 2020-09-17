var fixed_rect,moving_rect;
var gameobject1,gameobject2;


function setup() {
  createCanvas(800,400);
fixed_rect=createSprite(400, 200, 50, 50);
fixed_rect.shapeColor="blue";

moving_rect=createSprite(500,200,50,50);
moving_rect.shapeColor="blue";

gameobject1=createSprite(100,100,30,30);
gameobject1.shapeColor="blue";

gameobject2=createSprite(200,100,30,30);
gameobject2.shapeColor="blue";
//moving_rect.velocityX=3;
gameobject2.velocityX=4;

gameobject1.velocityX=-4;
//gameobject1.velocityY=3;
}

function draw() {
  background("black");  
moving_rect.y=mouseY;
moving_rect.x=mouseX;
text(mouseX+","+mouseY,mouseX,mouseY);
if(isTouching(moving_rect,gameobject1)){
moving_rect.shapeColor="red";
  gameobject1.shapeColor="red";
}
else{
  moving_rect.shapeColor="blue";
   gameobject1.shapeColor="blue";
}
bounceOff(gameobject1,gameobject2);

  drawSprites();



}
