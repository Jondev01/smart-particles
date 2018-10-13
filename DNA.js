class DNA {
  constructor (lifespan){
    this.dir = [];
    this.lifespan = lifespan;
    for(let i = 0; i<lifespan; i++){
      let angle = random(2*Math.PI);
      this.dir.push(createVector(Math.cos(angle), Math.sin(angle)));
    }
  }

  mutate(rate = 0.01){
    for(let i = 0; i<this.dir.length; i++){
      if(random(1) <= rate){
        let angle = random(2*Math.PI);
        this.dir[i] = createVector(Math.cos(angle), Math.sin(angle));
        this.dir[i].mag(0.1);
      }
    }
  }
}
