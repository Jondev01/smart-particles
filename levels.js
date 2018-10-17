let levels = [];
let start;
let goal;
let obstacles;
let bestParticle;
function init(){
  //level 0
  start = createVector(10, height/2);
  goal = new Goal(0.6*width, height/2, 10);
  obstacles = [];
  obstacles.push(new Obstacle(0.1*width, 0.45*height, 0.05*width, 0.1*height));
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
  goal = new Goal(0.5*width, 0.1*height, 10, 1);
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
    "nOutput": 4,
    "w_ih": {
      "rows": 5,
      "cols": 6,
      "matrix": [
        -0.11988687848561441,
        0.781387786629888,
        -0.4078642902546854,
        -1,
        -0.022191436245691643,
        -0.04704608276178379,
        0.6625241215029933,
        0.3974080408509706,
        -0.08347796073434388,
        0.1585894316796852,
        1,
        -0.26055708379037834,
        -0.5341424380238684,
        -0.4987699631642306,
        0.4356907042231848,
        0.5842813614488136,
        -0.12840731031471164,
        0.2850017760552077,
        -1,
        -0.5267622251463266,
        0.07405480354338723,
        -0.3224063836876083,
        0.4252478063017018,
        -1,
        -0.22802284409423268,
        -1,
        0.13760580000821965,
        -0.8224146215800157,
        -1,
        0.866778845577262
      ]
    },
    "w_ho": {
      "rows": 4,
      "cols": 5,
      "matrix": [
        0.6004880211109356,
        -0.5914436750162677,
        -0.11731299959935848,
        0.5808024170570891,
        -0.14500873139497394,
        0.1590501165772953,
        0.17008552302604452,
        0.19537532516775302,
        0.46133324274684173,
        -1,
        0.5501101077997914,
        -0.31536391280328546,
        -1,
        -0.4836097137364912,
        -0.31106241463933126,
        0.3462058915737791,
        -0.00463731554870872,
        0.5488634444085685,
        0.6298700386478422,
        0.8713782075614456
      ]
    },
    "b_i": {
      "rows": 6,
      "cols": 1,
      "matrix": [
        -1,
        0.14435648972765658,
        0.23525239039453671,
        0.6295500986221767,
        0.32231500489396003,
        0.6478488230955399
      ]
    },
    "b_h": {
      "rows": 5,
      "cols": 1,
      "matrix": [
        0.5502688243035561,
        -0.2189513543566779,
        -0.894029819628547,
        -0.2921750482577046,
        -0.5404304935261568
      ]
    }
  }

  let bestLevel4 = {
    "nInput": 6,
    "nHidden": 5,
    "nOutput": 4,
    "w_ih": {
      "rows": 5,
      "cols": 6,
      "matrix": [
        0.39406926402288,
        -0.3881374205516259,
        1,
        0.3981378775693831,
        -1,
        -0.7644895655308557,
        0.7720014527212422,
        -0.16050476849172535,
        0.277477076383879,
        -0.10600249712258458,
        0.6666332491448963,
        0.6019920803667076,
        1,
        0.7376393128155887,
        0.100885183584007,
        -1,
        1,
        -0.39082134176920924,
        0.010630478946259458,
        -0.6205053160407448,
        0.08330038576232157,
        -0.34146496827338435,
        -1,
        0.5417238173762042,
        0.9818473169009483,
        -1,
        1,
        -0.6689059259421284,
        0.97707951587588,
        -1
      ]
    },
    "w_ho": {
      "rows": 4,
      "cols": 5,
      "matrix": [
        0.002663935946006113,
        0.18548851962366797,
        0.703460538768554,
        0.2516022532599438,
        0.3077996738151745,
        0.3200800551356502,
        0.32358065455500373,
        0.9188497510468476,
        0.06149017822609748,
        -0.02234495667650993,
        -0.34421554866530757,
        0.36611636672663916,
        0.17682240876535849,
        1,
        -1,
        1,
        -0.07612713885328626,
        -0.3708849407855639,
        0.3270002052859984,
        -0.20375894140617357
      ]
    },
    "b_i": {
      "rows": 6,
      "cols": 1,
      "matrix": [
        -0.5561033814381169,
        -1,
        0.7195840280689305,
        0.5043519429644765,
        0.1744892608907822,
        0.6411363478781595
      ]
    },
    "b_h": {
      "rows": 5,
      "cols": 1,
      "matrix": [
        0.7363997670623719,
        -0.49605025957702287,
        0.7819536250545864,
        1,
        0.39335779911248725
      ]
    }
  }


  let bestLevel7 = {
    "nInput": 6,
    "nHidden": 5,
    "nOutput": 4,
    "w_ih": {
      "rows": 5,
      "cols": 6,
      "matrix": [
        0.4432049345443847,
        -0.3428064448164365,
        -0.04623713698470233,
        0.5571707696462411,
        0.8682157890362561,
        0.09588735980020369,
        0.414033181520876,
        -0.037740090414552174,
        0.06232268367382865,
        -0.9179433836462456,
        0.34159120397876563,
        -0.49242231033675665,
        -0.7699002089441644,
        0.9393291854132344,
        1,
        0.5979590098686041,
        -1,
        0.452159335288115,
        0.8548951602947699,
        0.757287097601818,
        0.23560692638937608,
        0.24233051574139441,
        0.1386487688396163,
        -0.9067328971153352,
        0.10779005705977518,
        0.8683690305541343,
        0.00596335331127662,
        -0.10927459623613345,
        0.4135025226938329,
        -0.583599504486171
      ]
    },
    "w_ho": {
      "rows": 4,
      "cols": 5,
      "matrix": [
        0.7250773785625628,
        -0.08254326880098084,
        0.38628458298026347,
        -0.6158361408920281,
        -0.25069865815015246,
        0.32042372990817425,
        -0.5945830252484416,
        0.6345294093532305,
        -0.7489045821256779,
        -0.6268782932815746,
        -0.7350065553670482,
        0.8230793601716311,
        -0.9874346320369969,
        -0.35057693307996063,
        0.02973348487889682,
        0.34274070939007295,
        -0.6674399343584874,
        -0.9670399161924981,
        0.411513471973457,
        0.668354956472792
      ]
    },
    "b_i": {
      "rows": 6,
      "cols": 1,
      "matrix": [
        -0.6020226236507775,
        -0.2384583000411178,
        -0.7486621878839457,
        0.12225930871596224,
        -0.38868192280623237,
        0.6564958758906911
      ]
    },
    "b_h": {
      "rows": 5,
      "cols": 1,
      "matrix": [
        0.2244992302850557,
        0.04460030286281613,
        0.5637970329468183,
        -0.27715704599850755,
        -0.6726938055326821
      ]
    }
  }
  bestParticle = bestLevel4;


}
