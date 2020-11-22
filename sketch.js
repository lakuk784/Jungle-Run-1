var jungle,jungle_image;
var man,man_image;
var bullet,bullet_image,bulletgroup;
var ghost,ghost_image,ghostgroup;
var shoot,shootgroup;
var backgroundsound;
var no = 0

function preload(){
  jungle_image = loadImage ("jungle.jpg")
  man_image = loadImage ("man.png")
  bullet_image = loadImage ("bullet.png")
  ghost_image = loadImage ("ghost.png")
  backgroundsound = loadSound ("jungle.wav") 
}

function setup() {
 createCanvas (430,600)
  
  backgroundsound.play();
  
  jungle = createSprite (215,300,10,10)
  jungle.addImage("moving",jungle_image)
  jungle.velocityY = 2
  jungle.scale=2
  
  man = createSprite (220,500,1,1)
  man.scale=0.4
  man.addImage("still",man_image)
 
  bulletgroup=new Group();
  ghostgroup=new Group();
  shootgroup=new Group();
}

function draw() {
  
   if (jungle.y===500){
    jungle.y=300
  }
  
  if (keyDown ("right")){
    man.x=man.x+3
  }
   if (keyDown ("left")){
    man.x=man.x-3
  }
  
  if (bulletgroup.isTouching(man)){
    bulletgroup.destroyEach();
    no = no+1
  }
  
  if (keyDown("s")&&(no != 0)){
  shoots();
    
  }
  
  if (ghostgroup.isTouching(shootgroup)&&(no != 0)){
    ghostgroup.destroyEach();
    shootgroup.destroyEach();
    no = no-1
  }
  
  if (ghostgroup.isTouching(man)){
  over();
  }
  
    )
 
  
  obs();
  bullets();
 
 drawSprites();
  
  fill ("yellow")
  textSize (20)
  text ("Use ARROW KEYS to move right and left and \n use S to shoot the ghost and  if the no.of bullets \nis 0 then u wont be able to kill the ghost",10,100)
  
  fill ("yellow")
  textSize (30)
  text ("No. of bullets : "+no,100,50
}

function bullets (){
  if (frameCount%70===0&&frameCount%30===0){
    bullet = createSprite (Math.round(random(150,350)),10,1,1)
    bullet.velocityY=2
    bullet.scale=0.05
    bullet.addImage ("notmoving",bullet_image)
    bulletgroup.add (bullet)
  }
}

function shoots (){
  shoot = createSprite (man.x,450,1,1)
  shoot.scale=0.04
  shoot.addImage(bullet_image)
  shoot.velocityY=-3
  shootgroup.add(shoot)
}



function obs(){
  if (frameCount%110===0&&frameCount%30===0){
    ghost = createSprite (Math.round(random(150,350)),10,1,1)
    ghost.velocityY=2
    ghost.scale=0.05
    ghost.addImage ("notmoving",ghost_image)
    ghostgroup.add (ghost)
  }
}

function over (){
    
  jungle.velocityY=0
  jungle.velocityX=-3
  
  man.visible = false
  ghostgroup.destroyEach();
  bulletgroup.destroyEach();
  
  
  background (0)
  fill ("white")
  textSize (100)
  text ("GAME \n OVER",50,300)
  }
