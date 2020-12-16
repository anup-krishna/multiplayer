var canvas,backgroundImg;
var gameState=0;
var playerCount;
var database;
var form,game,player;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
  //console.log(database);
  game=new Game();
  game.getstate();
  game.start();

  
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

