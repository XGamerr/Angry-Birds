var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img, cop_img, obstacle1Image, obstacle2Image, obstacles;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/c1.png");
  car2_img = loadImage("images/green.png");
  car3_img = loadImage("images/blue.png");
  car4_img = loadImage("images/white.png");
  ground = loadImage("images/ground.png");
  cop_img = loadImage("images/cop.png");
  obstacle1Image = loadImage("images/nitros.png")
  obstacle2Image = loadImage("images/Ecm_jammer.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
