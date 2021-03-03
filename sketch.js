var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var answer = null;;
var database;
var playerIndex;
var index;
var x = 100;

var game, form, player;
var rightA = "A"
var database
function setup(){
  canvas = createCanvas(850,400);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    form.hide();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
}
