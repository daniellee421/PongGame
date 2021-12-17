class Ball
{
  constructor()
  {
    this.x = 200;
    this.y = 100;
    this.w = 20;
    this.vx = 4.5;
    this.vy = 5;
  }
  
  move()
  {
    if(this.y>=height || this.y<=0)
    {
      this.vy *= -1;
    }
    this.y +=this.vy;
    this.x +=this.vx;
  }
  
  
  reset()
  {
    this.x = 200;
    this.y = 100;
  }
  show()
  {
    fill(255);
    noStroke();
    ellipse(this.x,this.y,this.w);
  }
}