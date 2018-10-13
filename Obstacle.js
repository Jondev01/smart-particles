class Obstacle{
  constructor(x, y, w, h){
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  show(){
    fill(0,0,255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  contains(x,y){
    return x>=this.pos.x && x<this.pos.x+this.w && y>this.pos.y && y<=this.pos.y+this.h;
  }

}
