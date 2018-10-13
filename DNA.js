class DNA {
  constructor (lifespan){
    this.dir = [];
    this.lifespan = lifespan;
    for(let i = 0; i<lifespan; i++){
      let angle = random(2*Math.PI);
      this.dir.push(createVector(Math.cos(angle), Math.sin(angle)));
    }
  }

  mutate(){
    for(let i = 0; i<this.dir.length; i++){
      if(random(1) <= 0.01){
        let angle = random(2*Math.PI);
        this.dir[i] = createVector(Math.cos(angle), Math.sin(angle));
      }
    }
  }
}
