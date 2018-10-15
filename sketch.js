let width = 500;
let height = 500;
let population;
let curLevel;

function setup() {
  createCanvas(width, height);
  startSketch();
  let select = makeSelect();
  let resetButton = createButton('start');
  resetButton.mousePressed(startSketch);
}

function draw() {
  background(0);
  curLevel.goal.show();
  obstaclesShow();
  population.update();
  population.hitGoal();
  hitObstacles();
  population.show();
  textSize(15);
  fill(255);
  text("Generation: "+population.generation, 10,20);
  push();
  rectMode(CENTER);
  fill(255,255,0);
  rect(curLevel.start.x, curLevel.start.y, 30, 30);
  pop();
}

function startSketch(){
  init();
  let selectLevel = document.getElementById('selectLevel');
  let level = 0;
  if(selectLevel)
    level = selectLevel.options[selectLevel.selectedIndex].value-1;
  curLevel = levels[level];
  population = new Population(1000, curLevel);
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

function makeSelect(){
  let select = document.createElement('select');
  select.id = 'selectLevel';
  document.body.appendChild(select);
  for(let i=0; i<levels.length; i++){
    let option = document.createElement('option');
    option.value = i+1;
    option.text = i+1;
    select.appendChild(option);
  }
}
