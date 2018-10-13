class Goal {
  constructor(x,y,r){
    this.pos = createVector(x,y);
    this.r = r;
  }

  show(){
    fill(0,255,0);
    ellipse(this.pos.x, this.pos.y, 2*this.r,2*this.r);
  }
}
