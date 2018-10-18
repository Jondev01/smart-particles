class Goal {
  constructor(x,y,r, xvel = 0, yvel=0){
    this.pos = createVector(x,y);
    this.r = r;
    this.xvel = xvel;
    this.yvel = yvel;
    this.dir = createVector(0,0)
    if(xvel != 0){
      let angle = random(2*PI);
      this.dir = createVector(Math.cos(angle), Math.sin(angle));
    }
  }

  update(){
  /*  if(this.xvel !== 0){
      if(this.collide())
        this.xvel *= -1;
      this.pos.x += random(1)*this.xvel;
    }*/
    if(this.dir.mag() != 0){
      if(this.collideR()){
        this.dir.mult(-1);
        this.pos.add(this.dir);
        let angle = random(2*PI);
        this.dir = createVector(Math.cos(angle), Math.sin(angle));
      }
      this.pos.add(this.dir);
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
  collideR(){
    let collide = false;
    let pos = createVector(this.pos.x, this.pos.y);
    //let shift = createVector(this.dir.x, this.dir.y);
    //shift.mult(this.r);
    //pos.add(shift);
    for(let obstacle of curLevel.obstacles){
      if(obstacle.contains(pos.x+this.r, pos.y) ||
        obstacle.contains(pos.x-this.r, pos.y) ||
        obstacle.contains(pos.x, pos.y+this.r) ||
        obstacle.contains(pos.x, pos.y-this.r)){
       collide = true;
       break;
       }
    }
    if(pos.x+this.r>=width || pos.x-this.r <0 || pos.y+this.r>= height || pos.y-this.r <0){
      collide = true;
    }
    return collide;
  }
}
