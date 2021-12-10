class Peddle
{
  constructor(x)
  {
    this.x = x;
    this.w = 20;
    this.h = 100;
    this.y = 200//height;
    this.vy = 0;
    this.up = 2;
  }

  update()
  {

    // if(this.y>=height-50 || this.y<=50)
    // {
    //   this.vy *=-1;
    // }
  }
  change_dir(y)
  {
    
    this.vy = this.up;
    this.y += y*5; 
    if(this.y>=height-50)
    {
      this.y=height-50;
    }else if(this.y<=50){
      this.y=50;
    }
  }
  move()
  {
   //this.y +=this.vy; 
  }
  show()
  {
    rect(this.x,this.y,this.w,this.h);
  }
  
}