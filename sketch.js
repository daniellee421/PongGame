let r_p;
let l_p;
let ball;
let crazyball;


let score1 = 0;
let score2 = 0;

function setup() {
  
  createCanvas(400, 400);
  rectMode(CENTER);
  l_p= new Peddle(10);
  r_p = new Peddle(390);
  ball = new Ball();
  crazyball = new crazyBall();
}
function draw() 
{
  //text display for players and score
  textDisplay();
  
  //stopping game if player wins
  winnerPlayer();
  
  //keydown when crazy mode
  keyDownWhen();
  
  //showing, moving, and updating peddles
  showPeddles();
  
  //showing, moving, and updating peddles with normal and crazyballs
  whichBall();
}
function reset(){
  score1 = 0;
  score2 = 0;
  loop();
}
function mousePressed(){
  reset();

}
function checkKeyDown() {
  if (keyIsDown(38)) {
    r_p.change_dir(-1);
  }
  if (keyIsDown(40)) {
    r_p.change_dir(1);
  }
  if(keyIsDown(87)){
    l_p.change_dir(-1);
  }
  if(keyIsDown(83)){
    l_p.change_dir(1);
  }
}
function ballBarrier(){
  if (ball.x>=width)
  {
    score1++
    ball.reset();
  }

  if (ball.x<=0)
  {
    score2++;
    ball.reset();

  }
}
function ballCollision(){
  if(ball.x>=380 && ball.y<=(r_p.y+50) && ball.y>=(r_p.y-50))
  {
    ball.vx *=-1;
  }

  if(ball.x<=20 && ball.y<=(l_p.y+50) && ball.y>=(l_p.y-50))
  {
    ball.vx *=-1;
  }
}
// function keyPressed()
// {
//   if(keyCode ==UP_ARROW)
//   {
//     r_p.change_dir(-3);
//   }
  
//   if(keyCode ==DOWN_ARROW)
//   {
//     r_p.change_dir(3);
//   }
  
// }
function checkKeyDownCrazy(){
  if (keyIsDown(38)) {
    r_p.change_dir(-2);
  }
  if (keyIsDown(40)) {
    r_p.change_dir(2);
  }
  if(keyIsDown(87)){
    l_p.change_dir(-2);
  }
  if(keyIsDown(83)){
    l_p.change_dir(2);
  }
}
function crazyBarrier(){
  if (crazyball.x>=width)
  {
    score1++
    crazyball.vx = 8;
    crazyball.vy = 7;
    crazyball.reset();
    
  }

  if (crazyball.x<=0)
  {
    score2++;
    crazyball.vx = 8;
    crazyball.vy = 7;
    crazyball.reset();
    

  }
}
function crazyCollision(){
  if(crazyball.x>=380 && crazyball.y<=(r_p.y+50) && crazyball.y>=(r_p.y-50))
  {
    crazyball.vx *=-1.2;
  }

  if(crazyball.x<=20 && crazyball.y<=(l_p.y+50) && crazyball.y>=(l_p.y-50))
  {
    crazyball.vx *=-1.2;
  }

}
function whoWon(){
  if(score1== 15){
    textSize(40);
    text("Player 1 has won!", 50, 250);
  }else if(score2 == 15){
    textSize(40);
    text("Player 2 has won!", 50, 250);
  }  

}
function textDisplay(){
  background(30);
  textSize(20);
  text("Player 1",30,50)
  text(score1,45,25);
  text("Player 2",320,50)
  text(score2,340,25);
}
function winnerPlayer(){
  if(score1 == 15 || score2 == 15){
    textSize(50);
    text("Game Over!", 70, 200);
    whoWon();
    noLoop();
  }
}
function keyDownWhen(){
  if(score1<2 && score2<2){
    checkKeyDown();
  }else {
    checkKeyDownCrazy();
  }
}
function showPeddles(){
  l_p.show();
  r_p.show();
  //l_p.move();
  //r_p.move();
  //r_p.update();
  //l_p.update();
}  
function whichBall(){
  if(score1 >= 10 || score2 >= 10)
  {
    
    crazyball.show();
    crazyball.move();
    crazyball.update();

    //if ball goes outside
    crazyBarrier();
    
    
    //detect collision
    crazyCollision();
    
  }
  else{
    

    ball.show();
    ball.move();
    ball.update();

    //if ball goes outside
    ballBarrier();
    
    
    //detect collision
    ballCollision();
    
  } 
}

