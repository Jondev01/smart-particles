class Population{
  //this.particles = [];
  constructor(size, x, y){
    this.particles = [];
    this.size = size;
    this.lifespan = 400;
    this.age = 0;
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
  }

  hitGoal(){
    this.particles.forEach(function(particle){
      particle.hitGoal();
    });
  }

  calculateFitness(){
    let total = 0;
    let goal = this.goal;
    this.particles.forEach(function(particle){
       total += particle.calculateFitness();
    });
    this.totalFitness = total;
  }

  newGeneration(){
    this.calculateFitness();
    let newGen = [];
    for(let i=0; i<this.size; i++){
      newGen.push(this.newChild());
    }
    return newGen;
  }

  newChild(){
    let rand = random(1);
    let sum = 0;
    for(let i=0; i<this.particles.length-1; i++){
      let fitness = this.particles[i].fitness/this.totalFitness;
      if(sum<=rand && rand<sum+fitness){
        return new Particle(start.x, start.y, this.lifespan, this.particles[i].DNA);
      }
      sum += this.particles[i].fitness/this.totalFitness;
    }
    return new Particle(start.x, start.y, this.lifespan, this.particles[this.particles.length-1].DNA);
  }

  evolve(){
    let newGen = this.newGeneration();
    this.particles = [];
    this.particles = newGen;
    this.age = 0;
    this.mutate();
  }

  mutate(){
    this.particles.forEach(function(particle){
        particle.DNA.mutate();
    });
  }

  allDead(){
    let alldead = true;
    this.particles.forEach(function(particle){
      if(!particle.dead)
        alldead = false;
    });
    return alldead;
  }

}
