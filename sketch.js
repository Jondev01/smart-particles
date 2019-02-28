let width = 700;
let height = 700;
let useNeural = false;
let population;
let useML;
let useGA;
let curLevel;
let speedSlider;
let loadedData;

function keyPressed(){
  if(keyCode==83){
    alert("saved");
    saveJSON(population.particles[0].brain, 'NNBrain.json');
  }
  /*if(keyCode==76){
    alert("load");
    loadJSON('NN/best.json', function(data){
      population.particles[0].brain = data;
    });
  }*/
}

function preload(){
  //loadedData = loadJSON('NN/best.json');
}

function setup() {
  createCanvas(width, height);
  startSketch();
  let select = makeSelect();
  //resetbutton
  let resetButton = createButton('start');
  speedSlider = createSlider(1,100,1);
  resetButton.mousePressed(startSketch);
  //toggle AI
  useML = createButton('Use machine learning');
  useML.mousePressed(() => toggleAI(true));
  useGA = createButton('Use genetic algorithm');
  useGA.mousePressed(() => toggleAI(false));
}

function draw() {
  for(let i=0; i<speedSlider.value(); i++){
    population.update();
    curLevel.goal.update();
    population.hitGoal();
    hitObstacles();
  }
  background(0);
  curLevel.goal.show();
  obstaclesShow();
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
  let popSize = useNeural ? 300 : 3000;
  population = new Population(popSize, curLevel);
  bestParticleBrain = NeuralNetwork.load(bestParticle);
  population.particles[0].brain = bestParticleBrain.clone();
  for(let particle of population.particles){
    if(random(1)<0.7)
      population.particles[0].brain = bestParticleBrain.clone();
  }
}

function toggleAI(useNN){
  useNeural = useNN;
  startSketch();
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
