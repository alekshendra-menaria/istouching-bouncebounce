var movingrect,fixedrect;
var gameobject1,gameobject2,gameobject3;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 100);
  fixedrect=createSprite(250, 300, 50, 100);
  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="blue";

gameobject1=createSprite(100,100,50,50);
gameobject2=createSprite(200,100,50,50);
gameobject3=createSprite(300,100,50,50);
gameobject1.shapeColor="green";
gameobject2.shapeColor="green";
gameobject3.shapeColor="green";
gameobject1.velocityX=-5;
gameobject2.velocityX=5;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  
 if (isTouching(movingrect,gameobject3)){
  movingrect.shapeColor="red";
  gameobject3.shapeColor="violet";
 }
else{
  movingrect.shapeColor="yellow";
  gameobject3.shapeColor="blue";
}
bounceOff(gameobject1,gameobject2);
  drawSprites();
}
function isTouching(object1,object2) {
  if (object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
      object2.y-object1.y<object1.height/2+object2.height/2){
   return true;
  }
  else{
   return false;
  }
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 


}