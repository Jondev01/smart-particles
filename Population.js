class Population{
  //this.particles = [];
  constructor(size, level){
    this.particles = [];
    this.generation = 1;
    let x = level.start.x;
    let y = level.start.y;
    this.size = size;
    this.lifespan = 2000;
    this.level  = level;
    this.age = 0;
    this.neural = false;
    for(let i=0; i<this.size; i++){
      this.particles.push(new Particle(x, y, this.lifespan));
    }
  }

  update(){
    if(this.age >= this.lifespan || this.allDead()){
      this.evolve();
    }
    else{
      this.particles.forEach(function(particle){
        particle.update();
      });
      this.age +=1;
    }
  }

  show(){
    this.particles.forEach(function(particle){
      particle.show();
    });
    this.particles[0].show();
    textSize(15);
    fill(255);
    text("Generation: "+this.generation, 10,20);
    /*if(this.average){
      push();
      fill(255,0,150);
      ellipse(this.average.x, this.average.y, 10, 10);
      pop();
    }*/
  }

  hitGoal(){
    let goal = this.level.goal;
    this.particles.forEach(function(particle){
      particle.hitGoal(goal);
    });
  }

  calculateFitness(){
    let total = 0;
    let bestFitness=0;
    let bestIndex;
    let start = this.level.start;
    let goal = this.level.goal;
    this.average = this.deadAverage();
    let average = this.average;
    this.particles.forEach(function(particle, i){
       total += particle.calculateFitness(start, goal, average);
       if(particle.fitness > bestFitness){
         bestFitness = particle.fitness;
         bestIndex = i;
       }
    });
    this.bestIndex = bestIndex;
    this.totalFitness = total;
  }

  newGeneration(){
    this.calculateFitness();
    let newGen = [];
    newGen.push(new Particle(this.level.start.x, this.level.start.y, this.lifespan, this.particles[this.bestIndex].DNA));
    for(let i=1; i<this.size; i++){
      newGen.push(this.newChild());
    }
    return newGen;
  }

  selectParticle(){
      let rand = random(1);
      let sum = 0;
      let start = this.level.start;
      for(let i=0; i<this.particles.length-1; i++){
        let fitness = this.particles[i].fitness/this.totalFitness;
        if(sum<=rand && rand<sum+fitness){
          return new Particle(start.x, start.y, this.lifespan, this.particles[i].DNA);
        }
        sum += this.particles[i].fitness/this.totalFitness;
      }
      return new Particle(start.x, start.y, this.lifespan, this.particles[this.particles.length-1].DNA);
  }

  newChild(){
    if(this.neural){
      let parent1 = this.selectParticle();
      let parent2 = this.selectParticle();
      let childBrain = parent1.brain.crossover(parent2.brain);
      let child = new Particle(start.x, start.y, this.lifespan);
      child.brain = childBrain;
    }
    else return this.selectParticle();
  }

  evolve(){
    let newGen = this.newGeneration();
    this.generation += 1;
    this.particles = [];
    this.particles = newGen;
    this.particles[0].highlight = true;
    this.age = 0;
    this.mutate();
  }

  mutate(){
    let neural = this.neural;
    this.particles.forEach(function(particle, i){
      if( i!= 0){
        if(neural)
          particle.brain.mutate();
        else particle.DNA.mutate();
      }
    });
  }

  allDead(){
    let alldead = true;
    this.particles.forEach(function(particle){
      if((!particle.dead) && (!particle.completed))
        alldead = false;
    });
    return alldead;
  }

  deadAverage(){
    let average = createVector(0,0);
    let count = 0;
    this.particles.forEach(function(particle){
      if(particle.dead){
        average.add(particle.pos);
        count++;
      }
    });
    if(count>0)
      average.mult(1.0/count);
    else average = undefined;
    return average;
  }

}
