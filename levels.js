let levels = [];
let start;
let goal;
let obstacles;
function init(){
  //level 1
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10);
  obstacles = [];
  levels.push(new Level(start, goal, obstacles));

  //level 2
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, height/2, 0.8*width, 20));
  levels.push(new Level(start, goal, obstacles));

  //level 3
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0, 0.7*height, 0.4*width, 0.05*height));
  obstacles.push(new Obstacle(0.6*width, 0.7*height, 0.4*width, 0.05*height));
  obstacles.push(new Obstacle(0.15*width, 0.6*height, 0.7*width, 0.05*height));
  levels.push(new Level(start, goal, obstacles));

  //level 4
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0, 0.15*height, 0.6*width, 30));
  obstacles.push(new Obstacle(0.5*width, 0.35*height, 0.7*width, 30));
  obstacles.push(new Obstacle(0, 0.6*height, 0.6*width, 30));
  obstacles.push(new Obstacle(0.8*width, 0.6*height, 0.2*width, 30));
  obstacles.push(new Obstacle(0.55*width, 0.85*height, 0.65*width, 30));
  levels.push(new Level(start, goal, obstacles));

  //level 5
  start = createVector(0.2*width, height-10);
  goal = new Goal(0.9*width, height/2, 10);
  obstacles = [];
  obstacles.push(new Obstacle(width/2, 20, 30, height-20));
  levels.push(new Level(start, goal, obstacles));

  //level 6
  start = start = createVector(0.5*width, height-10);
  goal = new Goal(0.95*width, 0.05*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0, 0, 0.45*width,height));
  obstacles.push(new Obstacle(0.55*width, 0.1*height, 0.45*width, height));
  levels.push(new Level(start, goal, obstacles));

  //level 7
  start = createVector(10, height-10);
  goal = new Goal(width-10, 0.5*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, 0.2*height, 0.5*width, 0.8*height));
  obstacles.push(new Obstacle(0.7*width, 0, 30, 0.7*height));
  levels.push(new Level(start, goal, obstacles));

  //level 8
  start = createVector(10, height-10);
  goal = new Goal(width-10, 0.5*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.25*width, 0.1*height, 0.3*width, 0.15*height));
  obstacles.push(new Obstacle(0.15*width, 0.4*height, 0.5*width, 0.1*height));
  obstacles.push(new Obstacle(0.15*width, 0.6*height, 0.5*width, 0.4*height));
  levels.push(new Level(start, goal, obstacles));

  //level 9
  start = createVector(0.05*width, 0.95*height);
  goal = new Goal(0.95*width, 0.9*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, 0.1*height, 0.8*width, 0.9*height));
  levels.push(new Level(start, goal, obstacles));

  //level 10
  start = createVector(0.05*width, 0.95*height);
  goal = new Goal(0.5*width, 0.5*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, 0.1*height, 0.1*width, 0.9*height));
  obstacles.push(new Obstacle(0.1*width, 0.1*height, 0.8*width, 0.05*height));
  obstacles.push(new Obstacle(0.8*width, 0.1*height, 0.1*width, 0.8*height));
  obstacles.push(new Obstacle(0.3*width, 0.85*height, 0.6*width, 0.05*height));
  levels.push(new Level(start, goal, obstacles));

  //level 11
  start = createVector(0.05*width, 0.95*height);
  goal = new Goal(0.5*width, 5, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0*width, 0.85*height, 0.9*width, 0.05*height));
  obstacles.push(new Obstacle(0.1*width, 0.7*height, 0.9*width, 0.05*height));
  obstacles.push(new Obstacle(0, 0.55*height, 0.9*width, 0.05*height));
  obstacles.push(new Obstacle(0.1*width, 0.4*height, 0.9*width, 0.05*height));
  obstacles.push(new Obstacle(0, 0.25*height, 0.9*width, 0.05*height));
  obstacles.push(new Obstacle(0.1*width, 0.1*height, 0.9*width, 0.05*height));
  levels.push(new Level(start, goal, obstacles));
}
