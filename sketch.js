var wall , thickness;
var bullet ,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(123,221)
weight = random(30,52)
thickness = random(22,83)

bullet = createSprite(50,200,50,20)
bullet.shapeColor = "white"
wall = createSprite(1500,200,thickness,height/2)

bullet.velocityX = speed;

}

function draw() {
  background('black');  

  if (hasCollided(bullet , wall)){
    bullet.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed / ( thickness * thickness * thickness);
   
   if (deformation > 180){
      
       bullet.shapeColor = "red"

   }
 
    if (deformation < 180 && deformation > 100){
       
       bullet.shapeColor = "yellow"

    }

    if (deformation < 100){

      bullet.shapeColor = "green"

    }


}

  drawSprites();
}

function hasCollided(abullet , awall){

bulletRightEdge = abullet.x + abullet.width;
wallLeftEdge = awall.x;
if (bulletRightEdge>= wallLeftEdge){
return true
}
return false;

}



