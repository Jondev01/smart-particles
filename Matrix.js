class Matrix{
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.matrix = new Array(rows*cols);
    //random entries between two and 1
    this.matrix.forEach(el => random(2)-1);
  }
  getElement(i, j){
    return this.matrix[i*this.cols+j];
  }
  setElement(i, j, a){
    this.matrix[i*this.cols+j] = a;
  }

  multiply(m2){
    if(this.cols !== m2.rows)
      return undefined;
    m = new Matrix(this.rows, m2.cols);
    for(let i=0; i<m.rows; i++){
      for(let j=0; j<m.cols; j++){
        let el = 0;
        for(let k=0; k<m2.rows; k++){
          el += this.getElement(i,k)*m2.getElement(k,j);
        }
        m.setElement(i,j, el);
      }
    }
    return m;
  }
  add(m2){
    if(this.rows != m2.rows || this.cols != m2.cols)
      return undefined;
    let m = new Matrix(this.rows, this.cols);
    for(let i = 0; i<this.rows; i++){
      for(let j = 0; j<this.cols; j++){
        let el = this.getElement(i,j) + m2.getElement(i,j);
        m.setElement(i,j,el);
      }
    }
    return m;
  }
  mutate(rate){
    for(let i=0; i<this.rows; i++){
      for(let j=0; j<this.rows; j++){
        if(random(1)<rate){
          let el = this.getElement(i,j) + random(1)-0.5;
          if(el > 1)
            el = 1;
          else if(el < 1)
            el = -1;
          this.setElement(i,j, el);
        }
      }
    }
  }

  crossover(partner){
    let i0 = floor(random(this.rows));
    let j0 = floor(random(this.cols));
    let m = new Matrix(this.rows, this.cols);
    for(let i=0; i<this.rows; i++){
      for(let j=0; j<this.cols; j++){
        let el = i<i0 && j<j0 ? this.getElement(i,j) : partner.getElement(i,j);
        m.setElement(i,j,el);
      }
    }
    return m;
  }
}
