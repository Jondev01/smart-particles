class Goal {
  constructor(x,y,r, xvel = 0){
    this.pos = createVector(x,y);
    this.r = r;
    this.xvel = xvel;
    this.dir = createVector(0,0)
    if(xvel != 0){
      let angle = random(2*PI);
      this.dir = createVector(Math.cos(angle), Math.sin(angle));
      this.speed = 1;
    }
  }

  update(){
    if(this.dir.mag() != 0){
      if(this.collide()){
        this.dir.mult(-1);
        this.move(1);
        let angle = random(2*PI);
        this.dir = createVector(Math.cos(angle), Math.sin(angle));
      }
      this.move();
    }
  }

  show(){
    fill(0,255,0);
    ellipse(this.pos.x, this.pos.y, 2*this.r,2*this.r);
  }

  move(back){
    let speed= this.speed*random(1)
    if(back)
      speed = this.speed;
    let shift = createVector(speed*this.dir.x, speed*this.dir.y);
    this.pos.add(shift);
  }

  collide(){
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
