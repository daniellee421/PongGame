class crazyBall extends Ball{
  constructor(x, y)
  {
    super(x,y);
    this.c = random(255);
    
  }
  

  update()
  {
    if(this.y>=height || this.y<=0)
    {
      this.vy *= -1.5;
    }
  }

  show()
  {
    fill(this.c);
    noStroke();
    ellipse(this.x,this.y,this.w);
    if (frameCount % 10 == 0) {
    
      this.c = color(random(255), random(255), random(255));
  
    }
  }
}