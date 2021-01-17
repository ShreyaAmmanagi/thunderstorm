const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
//const Body = Matter.Body
var engine,world
var drops = []
var maxDrop = 100
var thunder1
function preload(){
  t1 = loadImage("1.png")
  t2 = loadImage("2.png")
  t3 = loadImage("3.png")
  t4 = loadImage("4.png")
  man = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
}
function setup(){
   engine = Engine.create()
   world = engine.world
    createCanvas(400,700)

   if(frameCount % 150 === 0){  

 for(var i=0; i<maxDrop; i++){
   drops.push(new Drop(random(0,400),random(0,700)));
  }

}
body1 = new Body1(200,540,200,200)
 man1 = createSprite(200,540,10,10)
  man1.addAnimation("adding",man)
  man1.scale = 0.5

}

function draw(){
    Engine.update(engine)
    background(0)
   if(frameCount%100 == 0){
    thunder1 = createSprite(random(0,400),10,200,100)
    var rand = random(1,4)
    if(rand == 1){
    thunder1.addImage(t1)
    }else if(rand == 2){
    thunder1.addImage(t2)
    }else if(rand == 3){
    thunder1.addImage(t3)
    }else{
    thunder1.addImage(t4)
    }
   }
  if(frameCount%105 == 0){
    thunder1.destroy()
  }
 
for(var i = 0; i<maxDrop; i++){
    drops[i].display()
    drops[i].update1()
}

    drawSprites()
}   

