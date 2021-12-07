var bg , bgImg;

var player, playerImg, player_ShootingImg;

function preload(){
    bgImg = loadImage("assets/bg1.png");
    playerImg = loadImage("assets/shooter_2.png");
    player_ShootingImg = loadImage("assets/shooter_3.png");
}

function setup(){
    var canvas = createCanvas(2000,910);

    bg = createSprite(width/2, height/2, 20, 20);
    bg.addImage(bgImg);
    bg.scale = 2;

    player = createSprite(200, 700);
    player.addImage(playerImg);
    player.scale = 0.5;
    player.debug = true;
    player.setCollider("rectangle", 0, 0, 300, 500);
}

function draw(){
    background(9);

    if(keyDown("UP_ARROW") || touches.length > 0){
      player.position.y = player.position.y - 20;  
    }

    if(keyDown("DOWN_ARROW") || touches.length > 0){
      player.position.y = player.position.y + 20;
      //console.log(player.position.x);
    }

    if(keyWentDown("space")){
      player.addImage("playerShooting", player_ShootingImg);
      player.changeImage("playerShooting");
    }
    else if(keyWentUp("space")){
      player.addImage("playerStanding", playerImg);
      player.changeImage("playerStanding");
    }

    drawSprites();
}