
class Particle{
  constructor(x,y, lifespan, genes){
    this.age = 0;
    this.lifespan = lifespan;
    this.neural = useNeural;
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    if(this.neural)
      this.vel.x = 1;
    this.acc = createVector(0,0);
    this.completed = false;
    this.highlight = false;
    this.speed = 5;
    this.dead = false;
    this.hit = 0;
    this.fitness = 0;
    this.visited = new Set;
    this.r = 2;
    this.brain = new NeuralNetwork(6,5,3);
    if(genes){
      this.DNA =new DNA(genes.lifespan, genes.age);
      this.DNA.dir = [...genes.dir]
      this.DNA.dead = genes.dead;
    }
    else
      this.DNA = new DNA(lifespan);
  }

  update(){
    if(!this.dead && (!this.completed || this.neural) && this.age<this.lifespan){
      this.move();
      if(this.neural)
        this.vel.mult(0);
      this.vel.add(this.acc);
      if(this.vel.mag()>this.speed)
        this.vel.setMag(this.speed);
      if(this.neural)
        this.vel.setMag(this.speed);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.checkIfDead();
      this.visited.add(JSON.stringify([round(this.pos.x), round(this.pos.y)]));
      if(!this.completed)
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
      let NNInput = this.vision();
      let NNOutput = this.brain.calculateOutput(NNInput);
      let max = Number.NEGATIVE_INFINITY;
      let maxIndex;
      for(let i =0; i<3; i++){
        if(NNOutput[i]>max){
          max = NNOutput[i];
          maxIndex = i;
        }
      }
      if(maxIndex == 0)
        force = this.forward();
      else if(maxIndex == 1)
        force = this.left();
      else if(maxIndex == 2)
        force = this.right();
    }
    else force = this.DNA.dir[this.age];
    this.applyForce(force.normalize());
  }

  hitGoal(goal){
    if(dist(curLevel.goal.pos.x, curLevel.goal.pos.y, this.pos.x, this.pos.y)<goal.r+this.r && !this.dead){
      this.completed = true;
      this.hit++;
    }
  }

  calculateFitness(start, goal, average){
    let d;
    if(!this.completed || this.neural)
      d = dist(curLevel.goal.pos.x, curLevel.goal.pos.y, this.pos.x, this.pos.y);
    else d = goal.r/2;
    this.fitness = 1/(d*d);
    if(average && !this.neural){
      let deadDist = dist(average.x, average.y, this.pos.x, this.pos.y);
      this.fitness *= deadDist;
    }
    if(this.completed)
      this.fitness *= 100*(this.lifespan-this.age+1)*(this.lifespan-this.age+1);
    if(this.age<20 && dist(curLevel.start.x,curLevel.start.y,this.pos.x,this.pos.y)<40 && !this.neural)
      this.fitness /= 1000;
    if(this.neural){
      if(this.dead)
        this.fitness /= 1000;
      this.fitness*= this.visited.size;
      this.fitness *= (this.hit+0.1);
    }
    return this.fitness;
  }

  checkIfDead(){
    if(this.pos.x-this.r<0 || this.pos.x+this.r>=width
       || this.pos.y-this.r<=0 || this.pos.y+this.r >= height){
      this.dead = true;
    }
    //if(this.neural && this.visited.has(JSON.stringify([round(this.pos.x), round(this.pos.y)]))){
    //  this.dead = true
    //}
  }
  //returns input for NN
  vision(){
    //8: direction to goal, dist to obstacles
    let vision = [];
    let factor = 1000;

    //direction/distance to  to goal right left down up
    /*let xdist = curLevel.goal.pos.x-this.pos.x;
    let ydist = curLevel.goal.pos.y-this.pos.y;
    vision.push(max(xdist/factor, 0));
    vision.push(max(ydist/factor, 0));*/
    vision.push(this.detectGoal(this.forward()));
    vision.push(this.detectGoal(this.left()));
    vision.push(this.detectGoal(this.right()));
    //distance to obstacles
    vision.push(this.detectObstacle(this.forward())/factor);
    vision.push(this.detectObstacle(this.left())/factor);
    vision.push(this.detectObstacle(this.right())/factor);
    /*vision.push(this.detectObstacle(createVector(1,0))/factor);
    vision.push(this.detectObstacle(createVector(-1,0))/factor);
    vision.push(this.detectObstacle(createVector(0,1))/factor);
    vision.push(this.detectObstacle(createVector(0,-1))/factor);*/

    return vision;
    /*if(xdist > 0) {
      vision = vision.concat([xdist/factor,0]);
    }
    else if(xdist < 0){
      vision = vision.concat([0, -1*xdist/factor]);
    }
    else{
      vision = vision.concat([0,0]);
    }
    let ydist = curLevel.goal.pos.y-this.pos.y;
    if(ydist > 0) {
      vision = vision.concat([ydist/factor,0]);
    }
    else if(ydist < 0){
      vision = vision.concat([0, -1*ydist/factor]);
    }
    else{
      vision = vision.concat([0,0]);
    }*/

    //dist to obstacles right left up down--------------------------------------
  }

  detectGoal(dir){
    let pos = createVector(this.pos.x, this.pos.y);
    let goal = createVector(curLevel.goal.pos.x, curLevel.goal.pos.y);
    if(goal.x*dir.x+goal.y*dir.y - pos.x*dir.x-pos.y*dir.y >= 0)
      return 1;
    return 0;
  }

  detectObstacle(dir){
    let pos = createVector(this.pos.x, this.pos.y);
    let dist = 0;
    let obstacleFound = false;
    while(this.onscreen(pos) && !obstacleFound){
        pos.add(dir);
        dist++;
      for(let obstacle of curLevel.obstacles){
        if(obstacle.contains(pos.x, pos.y) ||
          obstacle.contains(pos.x+this.r, pos.y) ||
          obstacle.contains(pos.x-this.r, pos.y) ||
          obstacle.contains(pos.x, pos.y+this.r) ||
          obstacle.contains(pos.x, pos.y-this.r)){
            obstacleFound = true;
          break;
        }
      }
    }
    return dist;
  }

  onscreen(pos){
    return pos.x-this.r>=0 && pos.x+this.r<width
       && pos.y-this.r>=0 && pos.y+this.r < height;

  }

  forward(){
    let dir = createVector(this.vel.x, this.vel.y);
    if(dir.mag()==0){
      console.log("forward error");
      return undefined;
    }
    dir.normalize();
    return createVector(dir.x, dir.y);
  }

  left(){
    let dir = createVector(this.vel.x, this.vel.y);
    if(dir.mag()==0){
      console.log("left error");
      return undefined;
    }
    dir.normalize();
    return createVector(dir.y, -dir.x);
  }

  right(){
    let dir = createVector(this.vel.x, this.vel.y);
    if(dir.mag()==0){
      console.log("right error");
      return undefined;
    }
    dir.normalize();
    return createVector(-dir.y, dir.x);
  }
}
