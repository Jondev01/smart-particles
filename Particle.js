
class Particle{
  constructor(x,y, lifespan, genes){
    this.age = 0;
    this.lifespan = lifespan;
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.completed = false;
    this.highlight = false;
    this.dead = false;
    this.fitness = 0;
    this.r = 2;
    if(genes){
      this.DNA =new DNA(genes.lifespan);
      this.DNA.dir = [...genes.dir]
    }
    else
      this.DNA = new DNA(lifespan);
  }

  update(){
    if(!this.dead && !this.completed && this.age<this.lifespan){
      this.move();
      this.vel.add(this.acc);
      if(this.vel.mag>2)
        this.vel.mag(2);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.checkIfDead();
      this.age += 1;
    }
  }

  show(){
    fill(255);
    if(this.highlight){
      fill(255,0,0);
    }
      noStroke();
      ellipse(this.pos.x, this.pos.y, 2*this.r, 2*this.r);
  }

  applyForce(force){
    this.acc.add(force);
  }

  move(){
    this.applyForce(this.DNA.dir[this.age]);
  }

  hitGoal(){
    if(dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y)<goal.r+this.r)
      this.completed = true;
  }

  calculateFitness(){
    let d = dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y);
    this.fitness = 1/(d*d);
    if(this.completed)
      this.fitness *= 5*(this.lifespan-this.age+1);
    if(this.dead)
      this.fitness /= 5*(this.lifespan-this.age+1);
    return this.fitness;
  }

  checkIfDead(){
    if(this.pos.x-this.r<0 || this.pos.x+this.r>=width || this.pos.y-this.r<=0 || this.pos.y+this.r >= height){
      this.dead = true;
    }
  }
}
