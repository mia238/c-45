var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

kiteImg = loadImage("assets/kite2.png");
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
kite= createSprite(100,200,20,50);
kite.addImage(kiteImg);
kite.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            kite.velocityY = -6 ;
            
          }

          //adding gravity
           kite.velocityY = kite.velocityY + 2;
   
        drawSprites();
        
}