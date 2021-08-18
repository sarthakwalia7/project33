const Engine= Matter.Engine;
 const World= Matter.World;
  const Bodies= Matter.Bodies; 
  var world, engine, body;
   var bgImg, snowMan, manImg, ground; var snow =[];
    function preload(){ bgImg= loadImage("snow3.jpg");
     manImg= loadImage("snowman.png");
     }
      function setup() { 
        createCanvas(800,500);
       engine= Engine.create();
        world= engine.world;
         snowMan= createSprite(400,280,20,20);
          snowMan.addImage(manImg);
           snowMan.scale = 0.2; 
           ground = createSprite(400,500,800,15);
           }
           function draw() {
              background(bgImg);
               Engine.update(engine);
                if(frameCount % 20===0){ snow.push(new Snow(random (20,800),10,30,30));
                 } for(var j=0; j< snow.length; j++)
                 { snow[j].display(); 
                } 
                if(keyDown("space") && snowMan.y >= 200){
                   snowMan.velocityY = snowMan.velocityY = -12 }
                    snowMan.velocityY = snowMan.velocityY +0.8 
                    snowMan.collide(ground); 
                    if(keyDown("right")){ snowMan.x= snowMan.x +10 } 
                    if(keyDown("left")){ snowMan.x= snowMan.x -10 } 
                    drawSprites();
                   }