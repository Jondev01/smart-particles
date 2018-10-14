class DNA {
  constructor (lifespan, age=0){
    this.dir = [];
    this.lifespan = lifespan;
    this.age = age;
    this.dead = false;
    for(let i = 0; i<lifespan; i++){
      let angle = random(2*Math.PI);
      this.dir.push(createVector(Math.cos(angle), Math.sin(angle)));
    }
  }

  mutate(rate = 0.75){
    for(let i = 0; i<this.dir.length; i++){
      let rand = random(1);
      if(this.dead && i>this.age-15 && rand <= rate){
        let angle = random(2*Math.PI);
        this.dir[i] = createVector(Math.cos(angle), Math.sin(angle));
        this.dir[i].mag(0.1);
      }
      else if(!this.dead && i>this.age-15 && rand <= 0.002){
        let angle = random(2*Math.PI);
        this.dir[i] = createVector(Math.cos(angle), Math.sin(angle));
        this.dir[i].mag(0.1);
      }
      else if(rand <= 0.0001){
        let angle = random(2*Math.PI);
        this.dir[i] = createVector(Math.cos(angle), Math.sin(angle));
        this.dir[i].mag(0.1);
      }
    }
  }
}
