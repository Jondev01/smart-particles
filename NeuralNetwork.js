class NeuralNetwork{
  constructor(input, hidden, output){
    this.nInput = input;
    this.nHidden = hidden;
    this.nOutput = output;
    this.w_ih = new Matrix(hidden, input)
    this.w_ho = new Matrix(output, hidden);
    this.b_i = new Matrix(input, 1);
    this.b_i.matrix.map(x => 0);
    this.b_h = new Matrix(hidden, 1);
    this.b_h.matrix.map(x => 0);
  }

  nextLayer(input, weights, bias){
    return weights.multiply(input.add(bias));
  }

  calculateOutput(input){
    input = Matrix.arrayToMatrix(input);
    let hiddenLayer = this.nextLayer(input, this.w_ih, this.b_i);
    hiddenLayer = this.activateLayer(hiddenLayer);
    let output = Matrix.matrixToArray(this.nextLayer(hiddenLayer, this.w_ho, this.b_h));
    return output;
  }

  activateLayer(layer){
    let m = new Matrix(layer.rows, 1);
    for(let i=0; i<m.rows; i++){
      let el = 1.0/(1+Math.exp(-layer.getElement(i,0)));
      m.setElement(i, 0, el);
    }
    return m;
  }

  mutate(rate){
    this.w_ih.mutate(rate);
    this.w_ho.mutate(rate);
    this.b_i.mutate(rate);
    this.b_h.mutate(rate);
  }

  crossover(partner){
      let child = new NeuralNetwork(this.nInput, this.nHidden, this.nOutput);
      child.w_ih = this.w_ih.crossover(partner.w_ih);
      child.w_ho = this.w_ho.crossover(partner.w_ho);
      child.b_i = this.b_i.crossover(partner.b_i);
      child.b_h = this.b_h.crossover(partner.b_h);
      return child;
  }

  clone(){
    let clone = new NeuralNetwork(this.nInput, this.nHidden, this.nOutput);
    clone.w_ih = this.w_ih.clone();
    clone.w_ho = this.w_ho.clone();
    clone.b_i = this.b_i.clone();
    clone.b_h = this.b_h.clone();
    return clone;
  }

  static load(data){
    if(typeof(data) == "string")
      data = JSON.parse(data);
    let n = new NeuralNetwork(data.nInput, data.nHidden, data.nOutput);
    n.w_ih = Matrix.load(data.w_ih);
    n.w_ho = Matrix.load(data.w_ho);
    n.b_i = Matrix.load(data.b_i);
    n.b_h = Matrix.load(data.b_h);
    return n;
  }
}
