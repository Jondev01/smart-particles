
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
      this.DNA =new DNA(genes.lifespan, genes.age);
      this.DNA.dir = [...genes.dir]
      this.DNA.dead = genes.dead;
    }
    else
      this.DNA = new DNA(lifespan);
  }

  update(){
    if(!this.dead && !this.completed && this.age<this.lifespan){
      this.move();
      this.vel.add(this.acc);
      if(this.vel.mag()>1)
        this.vel.mag(1);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.checkIfDead();
      this.age += 1;
    }
    else if(this.dead){
      this.DNA.age = this.age;
      this.DNA.dead = true;
    }
    else if(!this.dead)
        this.DNA.dead = false;
  }

  show(){
    fill(255);
    if(this.highlight){
      fill(255,0,0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, 4*this.r, 4*this.r);
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

  hitGoal(goal){
    if(dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y)<goal.r+this.r)
      this.completed = true;
  }

  calculateFitness(start, goal, average){
    let d = dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y);
    this.fitness = 1/(d*d);
    if(average){
      let deadDist = dist(average.x, average.y, this.pos.x, this.pos.y);
      this.fitness *= deadDist;
    }
    if(this.completed)
      this.fitness *= 5*(this.lifespan-this.age+1);
    if(this.age<20 && dist(start.x,start.y,this.pos.x,this.pos.y)<40)
      this.fitness /= 1000;
    return this.fitness;
  }

  checkIfDead(){
    if(this.pos.x-this.r<0 || this.pos.x+this.r>=width || this.pos.y-this.r<=0 || this.pos.y+this.r >= height){
      this.dead = true;
    }
  }
}
