let levels = [];
let start;
let goal;
let obstacles;
let bestParticle;
function init(){
  //level 0
  start = createVector(10, height/2);
  goal = new Goal(0.6*width, height/2, 50, 1);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, 0.45*height, 0.05*width, 0.1*height));
  obstacles.push(new Obstacle(0, 0.3*height, 0.1*width, 0.05*height));
  obstacles.push(new Obstacle(0, 0.7*height, 0.1*width, 0.05*height));
  obstacles[0].move = function(){
    if(!this.vel)
      this.vel = 1;

  }
  levels.push(new Level(start, goal, obstacles));

  //level 1
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10);
  obstacles = [];
  levels.push(new Level(start, goal, obstacles));

  //level 2
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 0.1*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, height/2, 0.8*width, 20));
  levels.push(new Level(start, goal, obstacles));

  //level 3
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 0.1*height, 20, 1);
  obstacles = [];
  obstacles.push(new Obstacle(0, 0.7*height, 0.4*width, 0.05*height));
  obstacles.push(new Obstacle(0.6*width, 0.7*height, 0.4*width, 0.05*height));
  obstacles.push(new Obstacle(0.15*width, 0.6*height, 0.7*width, 0.05*height));
  levels.push(new Level(start, goal, obstacles));

  //level 4
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 10, 10,1);
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

  //level 12
  start = createVector(0.5*width, 0.95*height);
  goal = new Goal(0.5*width, 0.6*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.3*width, 0, 0.4*width, 0.1*height));
  obstacles.push(new Obstacle(0.6*width, 0, 0.1*width, 0.8*height));
  obstacles.push(new Obstacle(0.3*width, 0.7*height, 0.3*width, 0.1*height));
  obstacles.push(new Obstacle(0.3*width, 0.2*height, 0.1*width, 0.5*height));
  levels.push(new Level(start, goal, obstacles));

  //level 13
  start = createVector(0.95*width, 0.95*height);
  goal = new Goal(0.05*width, 0.05*height, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.3*width, 0, 0.1*width, 0.7*height));
  obstacles.push(new Obstacle(0.6*width, 0.3*height, 0.1*width, 0.5*height));
  obstacles.push(new Obstacle(0, 0.3*height, 0.1*width, 0.1*height));
  obstacles.push(new Obstacle(0.1*width, 0.3*height, 0.1*width, 0.5*height));
  obstacles.push(new Obstacle(0.1*width, 0.8*height, 0.6*width, 0.1*height));
  levels.push(new Level(start, goal, obstacles));
  //load

  let bestLevel1 = {
    "nInput": 8,
    "nHidden": 6,
    "nOutput": 4,
    "w_ih": {
      "rows": 6,
      "cols": 8,
      "matrix": [
        0.40855248383286513,
        -0.7650771482883707,
        0.7758749237437566,
        -0.2869184449282991,
        1,
        1,
        0.68931034771107,
        -0.05203315159767685,
        0.41406463000054305,
        -0.3243561361551932,
        0.39429262314863545,
        -0.4443967616983011,
        -0.12508758819009635,
        -0.6560479310047009,
        -0.5459406471789086,
        1,
        -0.9590891175423613,
        1,
        -0.478642992712647,
        0.9631400415742264,
        0.5784347313270173,
        -0.5952488599546246,
        0.38821483340059615,
        -0.04410395894187369,
        -0.1429793702264086,
        -1,
        -0.43426483734925325,
        0.7909034450719346,
        0.08027320438018792,
        -1,
        1,
        0.8964382660363563,
        0.23496283275103558,
        -0.8317498725601342,
        -0.36488939801891407,
        1,
        1,
        -1,
        -0.8189989070670447,
        -0.4673824840186187,
        0.12084403431106994,
        1,
        0.006019638946004768,
        -0.6464618604321717,
        0.611460535959305,
        -1,
        0.4679861400076537,
        0.6499892129403273
      ]
    },
    "w_hh": {
      "rows": 6,
      "cols": 6,
      "matrix": [
        0.01705137770938725,
        0.9540779946837081,
        -0.348131154156504,
        -0.96134499216123,
        0.5195053599176491,
        0.6769892072325892,
        1,
        1,
        -0.08994593920320026,
        -1,
        0.9736554517521974,
        -1,
        -0.4154300016373531,
        0.6268031247952139,
        0.3595383573005271,
        -0.48213755980345097,
        0.6569859017417481,
        -0.4107143955914543,
        -1,
        -0.3047636735860757,
        -0.23606477326299125,
        0.08356878675579038,
        0.1733476998944279,
        0.06876460904558179,
        0.6208313737784397,
        1,
        1,
        0.7913947272854149,
        0.14184755715999087,
        -1,
        -1,
        1,
        -0.29711474801156657,
        -1,
        -0.3188986430090348,
        0.273741077284853
      ]
    },
    "w_ho": {
      "rows": 4,
      "cols": 6,
      "matrix": [
        -1,
        -1,
        0.9956187798297234,
        1,
        -1,
        -1,
        -0.3103790921218619,
        1,
        -0.5240396102347518,
        -0.5578371908448738,
        0.8824317875426164,
        0.9090819551358424,
        1,
        1,
        -0.39191894939131355,
        0.1776334997383877,
        -0.22980033884685724,
        0.9916825154953224,
        -0.20237525793016609,
        -1,
        -0.14376138376209857,
        0.7510398939263436,
        -1,
        0.30400753032685746
      ]
    },
    "b_i": {
      "rows": 8,
      "cols": 1,
      "matrix": [
        1,
        0.0542249654563598,
        0.6446783820045674,
        -0.698190037494324,
        -0.9283888548825225,
        0.16781541340378459,
        -0.3044925305591937,
        0.15790101838792303
      ]
    },
    "b_h": {
      "rows": 6,
      "cols": 1,
      "matrix": [
        -0.025437447840066074,
        1,
        0.970124716353364,
        -0.10977416910567861,
        -1,
        -0.2281587908612499
      ]
    },
    "b_o": {
      "rows": 6,
      "cols": 1,
      "matrix": [
        -0.9041535106688903,
        -0.3465878133246152,
        -1,
        1,
        -0.44891768546646826,
        -0.7158854126800964
      ]
    }
  }

  bestParticle = bestLevel1;


}
