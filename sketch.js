var bullet,wall,thickness;
var speed,weight;

function setup() {
   createCanvas(1600,400,bullet);

   speed = random(223,321);
   weight = random(30,52);
   thickness = random(22,83);

   fill("white");
   bullet = createSprite(100,200,60,20);
   bullet.velocityX = speed;
  
   wall = createSprite(1200,200,thickness,height/2);
  
 
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall))
  {
    
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage < 10){
      wall.shapeColor = color("red");
    }

    if(damage > 10){
      wall.shapeColor = color("green");
    }

  }
  drawSprites();
  
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wall.x){
    return true;
  }
  return false;
}