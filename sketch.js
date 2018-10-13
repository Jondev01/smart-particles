let width = 400;
let height = 400;
let population;
let goal;
let start;
let obstacles = [];

function setup() {
  createCanvas(width, height);
  start = createVector(width/2, height-10);
  goal = new Goal(0.8*width, 10, 10);
  createObstacles();

  population = new Population(5000, start.x, start.y);
}

function draw() {
  background(0);
  goal.show();
  obstaclesShow();
  population.update();
  population.hitGoal();
  hitObstacles();
  population.show();
}

function createObstacles(){
  //obstacles.push(new Obstacle(20, height/2, 0.75*width, 20));
  obstacles.push(new Obstacle(0, 0.15*height, 0.6*width, 20));
  obstacles.push(new Obstacle(0.5*width, 0.35*height, 0.7*width, 20));
  obstacles.push(new Obstacle(0, 0.6*height, 0.6*width, 20));
  obstacles.push(new Obstacle(0.8*width, 0.6*height, 0.2*width, 20));
  obstacles.push(new Obstacle(0.5*width, 0.85*height, 0.7*width, 20));
}

function obstaclesShow(){
  obstacles.forEach(function(obstacle){
    obstacle.show();
  });
}
function hitObstacles(){
  obstacles.forEach(function(obstacle){
    population.particles.forEach(function(particle){
      if(obstacle.contains(particle.pos.x, particle.pos.y)){
        particle.dead = true;
      }
    });
  });
}
