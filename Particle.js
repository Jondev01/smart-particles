
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
    this.brain = new NeuralNetwork(7,6,4);
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
      if(this.vel.mag()>5)
        this.vel.setMag(5);
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
    let force;
    if(this.neural){
      let NNOutput = this.brain.calculateOutput(this.vision());
      let max = 0;
      let maxIndex;
      for(let i =0; i<4; i++){
        if(NNOutput[i]>max){
          max = NNOutput[i];
          maxIndex = i;
        }
      }
      if(maxIndex == 0)
        force = createVector(0,-1);
      else if(maxIndex == 1)
        force = createVector(1,0);
      else if(maxIndex == 2)
        force = createVector(0,1)
      else force = createVector(-1,0);
    }
    else force = this.DNA.dir[this.age];
    this.applyForce(force.normalize());
  }

  hitGoal(goal){
    if(dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y)<goal.r+this.r)
      this.completed = true;
  }

  calculateFitness(start, goal, average){
    let d;
    if(!this.completed)
      d = dist(goal.pos.x, goal.pos.y, this.pos.x, this.pos.y);
    else d = goal.r/2;
    this.fitness = 1/(d*d);
    if(average){
      let deadDist = dist(average.x, average.y, this.pos.x, this.pos.y);
      this.fitness *= deadDist;
    }
    if(this.completed)
      this.fitness *= 5*(this.lifespan-this.age+1)*(this.lifespan-this.age+1);
    if(this.age<20 && dist(start.x,start.y,this.pos.x,this.pos.y)<40)
      this.fitness /= 1000;
    return this.fitness;
  }

  checkIfDead(){
    if(this.pos.x-this.r<0 || this.pos.x+this.r>=width
       || this.pos.y-this.r<=0 || this.pos.y+this.r >= height){
      this.dead = true;
    }
  }
//returns input for NN-----very long and messy, look away--------------------
  vision(){
    //7: direction to goal, current velocity, dist to obstacles
    let vision = [];
    //calculate direction to goal //0 down, 1 right, 2 up, 3 left
    let dir = p5.Vector.sub(goal.pos, this.pos);
    let goalDir = round(2*Math.atan2(dir.y, dir.x)/Math.PI);
    if(goalDir == -2)
      goalDir = 1;
    goalDir += 1;
    vision.push(goalDir);
    //velocity direction
    let velDir = round(2*Math.atan2(this.vel.y, this.vel.x)/Math.PI);
    if(velDir == -2)
      velDir = 1;
    velDir += 1;
    vision.push(velDir);
    //velocity magnitude
    vision.push(this.vel.mag());

    //dist to obstacles down right up left--------------------------------------
    //down--------------------------
    let xpos = this.pos.x;
    let ypos = this.pos.y;
    let dist = 0;
    while(ypos<height){
      ypos += 1;
      for(let i=0; i<curLevel.obstacles.length; i++){
        let obstacle = curLevel.obstacles[i];
        if(obstacle.contains(xpos, ypos+this.r)){
          dist = round(ypos-this.pos.y);
          break;
        }
      }
    }
    if(dist == 0)
      dist = round(height-ypos);
    vision.push(dist);
    //right-----------------------
    let xpos = this.pos.x;
    let ypos = this.pos.y;
    let dist = 0;
    while(xpos<width && dist == 0){
        xpos += 1;
      for(let i=0; i<curLevel.obstacles.length; i++){
        let obstacle = curLevel.obstacles[i];
        if(obstacle.contains(xpos+this.r, ypos)){
          dist = round(xpos-this.pos.x);
          break;
        }
      }
    }
    if(dist == 0)
      dist = width-xpos;
    vision.push(dist);
    //up------------------------------
    let xpos = this.pos.x;
    let ypos = this.pos.y;
    let dist = 0;
    while(ypos>0 && dist == 0){
        ypos -= 1;
      for(let i=0; i<curLevel.obstacles.length; i++){
        let obstacle = curLevel.obstacles[i];
        if(obstacle.contains(xpos, ypos-this.r)){
          dist = round(this.pos.y-ypos);
          break;
        }
      }
    }
    if(dist == 0)
      dist = this.pos.y;
    vision.push(dist);
    //left---------------------------
    let xpos = this.pos.x;
    let ypos = this.pos.y;
    let dist = 0;
    while(xpos>0 && dist == 0){
        xpos -= 1;
      for(let i=0; i<curLevel.obstacles.length; i++){
        let obstacle = curLevel.obstacles[i];
        if(obstacle.contains(xpos-this.r, ypos)){
          dist = round(this.pos.x-xpos);
          break;
        }
      }
    }
    if(dist == 0)
      dist = this.pos.x;
    vision.push(dist);
    //---------------------------------------------------------------------
    return vision;
  }
}
