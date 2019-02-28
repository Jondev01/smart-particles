let levels = [];
let start;
let goal;
let obstacles;
let bestParticle;
function init(){
  //level 0
  /*start = createVector(width/2, height/2);
  goal = new Goal(0.75*width, height/2, 50, 1);
  obstacles = [];
  obstacles.push(new Obstacle(0.6*width, 0.45*height, 0.05*width, 0.1*height));
  obstacles.push(new Obstacle(0.35*width, 0.45*height, 0.05*width, 0.1*height));
  obstacles.push(new Obstacle(0.45*width, 0.3*height, 0.1*width, 0.05*height));
  obstacles.push(new Obstacle(0.45*width, 0.65*height, 0.1*width, 0.05*height));
  obstacles[0].move = function(){
    if(!this.vel)
      this.vel = 1;

  }
  levels.push(new Level(start, goal, obstacles));*/

  //level 1
  start = createVector(width/2, 0.5*height);
  goal = new Goal(0.5*width, 10, 10, 1);
  obstacles = [];
  levels.push(new Level(start, goal, obstacles));

  //level 2
  start = createVector(width/2, height-10);
  goal = new Goal(0.5*width, 0.1*height, 10, 1);
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
    "nInput": 6,
    "nHidden": 5,
    "nOutput": 3,
    "w_ih": {
      "rows": 5,
      "cols": 7,
      "matrix": [
        -0.14648360205737632,
        -1,
        0.4374877695891026,
        0.23300515210083939,
        -0.7158016411229116,
        0.40426835805039296,
        1,
        0.8980123374815485,
        -0.40117354964987273,
        0.8549499254242243,
        -0.0739610250193321,
        -1,
        0.045039383034686686,
        0.8144001876357989,
        0.3736377302754619,
        -1,
        -1,
        0.8829464034507919,
        0.29988472542273836,
        -0.8981497933699325,
        0.8826884560058486,
        0.3168614850628395,
        0.14600215582710874,
        0.666191147774648,
        -1,
        -0.2498812288065997,
        0.40377886328455226,
        -0.5214409863736598,
        0.28881008062713454,
        0.8978146963167881,
        -0.772196330731552,
        -0.9306842605109189,
        -1,
        1,
        -0.1251150959302607
      ]
    },
    "w_hh": {
      "rows": 5,
      "cols": 6,
      "matrix": [
        -0.7570507643990778,
        -0.5027792984158856,
        -0.25886958123452963,
        1,
        -0.8318484172924223,
        0.9267919665365421,
        -1,
        1,
        0.11387556727204107,
        0.7882506770272797,
        -1,
        0.18233332025639504,
        -0.9431039647589734,
        -0.4381839688097715,
        0.8834456416288021,
        0.09650992618232968,
        0.31611863295921605,
        -0.6800914616006453,
        1,
        1,
        -0.72726493436689,
        0.9888629591786766,
        -0.6719933435560641,
        -0.6208485057524937,
        -0.6783490085779644,
        -0.6153981969019902,
        -0.8728807256411977,
        1,
        0.7575616258393758,
        0.13683568233013244
      ]
    },
    "w_ho": {
      "rows": 3,
      "cols": 6,
      "matrix": [
        -0.5800160480194592,
        0.9011643682382746,
        -0.4380666901321564,
        0.3664975583026444,
        0.3170644286813058,
        -0.43815210313521913,
        0.6060247656060302,
        -0.33868621478698957,
        0.002396239537688416,
        -0.20650726301799338,
        0.2957388791137019,
        0.4781638370441921,
        -1,
        0.016925268622037137,
        -0.6516567628121805,
        1,
        -0.4690653047886002,
        0.9510778545349283
      ]
    }
  }

  bestLevel3 = {
    "nInput": 6,
    "nHidden": 5,
    "nOutput": 3,
    "w_ih": {
      "rows": 5,
      "cols": 7,
      "matrix": [
        0.8176216965444429,
        0.3903520855167204,
        -0.1468337413346874,
        0.23728420726181376,
        0.2747622810832073,
        0.019589612861718564,
        -0.6308516473196231,
        -0.9241322256436968,
        -0.04702821711621308,
        -0.3052978108950595,
        0.8243782611545232,
        -0.3288946764262173,
        0.7897780943055386,
        -0.7235907449953309,
        -0.00263757013493926,
        1,
        -0.8421726777551002,
        0.6215511693741727,
        -0.7780512930963837,
        -0.8170368192328072,
        -0.619875496690681,
        0.841908646570726,
        -0.21938297247773875,
        -0.6502291596021292,
        -0.7298344079448009,
        0.7151942592487766,
        -0.2775468061983073,
        -0.7332500585503703,
        0.3669312381164853,
        -0.4269133250935693,
        -0.6959701069216129,
        -0.2367410320912131,
        -0.749461160695136,
        -1,
        -0.12568699736069933
      ]
    },
    "w_hh": {
      "rows": 5,
      "cols": 6,
      "matrix": [
        -0.8840976690839759,
        -0.7476792219626618,
        -0.31532518228109296,
        -0.5476194476552996,
        -0.3515409105633358,
        0.9035147209423293,
        0.6358441538053374,
        0.1279231746996352,
        -0.4226873869677097,
        -0.469079602609372,
        -0.8191602378797658,
        -0.6754109848810561,
        0.7364342524230723,
        0.46380924646213684,
        0.7299916719748216,
        0.9015683960168448,
        -0.6734685797376581,
        -0.7520759033319275,
        0.34459204860021897,
        -0.53074718778793,
        -0.01892767731533196,
        -0.012065905163228141,
        0.9449067198088992,
        -0.5067223874414166,
        1,
        1,
        0.10623881039501093,
        0.790093418045962,
        -0.689876756469471,
        -0.17813941156549573
      ]
    },
    "w_ho": {
      "rows": 3,
      "cols": 6,
      "matrix": [
        -0.3114407703435984,
        0.5307954109380923,
        -0.49685617429205253,
        0.7123366918239338,
        0.4122178982601019,
        0.3113625543989973,
        0.8751356619704462,
        0.6018689513388216,
        0.3530799906281046,
        0.1125413594263347,
        0.6541910241217321,
        -0.6122667645377073,
        -0.21137511989951596,
        0.9566752115789146,
        -0.224351764398679,
        0.14597193159541488,
        0.7267321439141279,
        -0.48076629243577695
      ]
    }
  }


  bestParticle = bestLevel3;


}
