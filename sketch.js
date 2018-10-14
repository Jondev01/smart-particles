let width = 500;
let height = 500;
let population;
//let goal;
//let start;
//let obstacles = [];
let curLevel;

function setup() {
  createCanvas(width, height);
  init();
  curLevel = levels[9];

  population = new Population(1000, curLevel);
}

function draw() {
  background(0);
  curLevel.goal.show();
  obstaclesShow();
  population.update();
  population.hitGoal();
  hitObstacles();
  population.show();
  push();
  rectMode(CENTER);
  fill(255,255,0);
  rect(curLevel.start.x, curLevel.start.y, 30, 30);
  pop();
}

function obstaclesShow(){
  curLevel.obstacles.forEach(function(obstacle){
    obstacle.show();
  });
}
function hitObstacles(){
  curLevel.obstacles.forEach(function(obstacle){
    population.particles.forEach(function(particle){
      if(obstacle.contains(particle.pos.x, particle.pos.y-particle.r) ||
      obstacle.contains(particle.pos.x, particle.pos.y+particle.r) ||
      obstacle.contains(particle.pos.x-particle.r, particle.pos.y) ||
      obstacle.contains(particle.pos.x+particle.r, particle.pos.y)){
        particle.dead = true;
      }
    });
  });
}
