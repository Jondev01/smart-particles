class Goal {
  constructor(x,y,r, vel = 0){
    this.pos = createVector(x,y);
    this.r = r;
    this.vel = vel;
  }

  update(){
    if(this.vel !== 0){
      if(this.collide())
        this.vel *= -1;
      this.pos.x += random(1)*this.vel;
    }
  }

  show(){
    fill(0,255,0);
    ellipse(this.pos.x, this.pos.y, 2*this.r,2*this.r);
  }

  collide(){
    let collide = false;
    for(let obstacle of curLevel.obstacles){
      if(obstacle.contains(this.pos.x+this.r, this.pos.y)){
       collide = true;
       this.pos.x = obstacle.pos.x-this.r
       break;
       }
     if(obstacle.contains(this.pos.x-this.r, this.pos.y)){
      collide = true;
      this.pos.x = obstacle.pos.x+this.r
      break;
      }
    }
    if(this.pos.x+this.r>=width){
      collide = true;
      this.pos.x = width-this.r;
    } else if(this.pos.x - this.r <= 0){
      collide = true;
      this.pos.x = this.r;
    }
    return collide;
  }
}
