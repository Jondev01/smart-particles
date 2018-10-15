class NeuralNetwork{
  constructor(input, hidden, output){
    this.nInput = input;
    this.nHidden = hidden;
    this.nOutput = output;
    this.w_ih = new Matrix(hidden, input)
    this.w_ho = new Matrix(output, hidden);
    this.b_i = new Matrix(input, 1);
    this.b_h = new Matrix(hidden, 1);
  }

  nextLayer(input, weights, bias){
    return weights.multiply(input.add(bias));
  }

  calculateOutput(input){
    let hiddenLayer = nextLayer(input, this.w_ih, this.b_i);
    hiddenLayer = activateLayer(hiddenLayer);
    return nextLayer(hiddenLayer, this.w_ho, this.b_h);
  }

  activateLayer(layer){
    let m = new Matrix(layer.rows, 1);
    for(let i=0; i<m.rows; i++){
      let el = 1.0/(1+Math.exp(-m.getElement(i,1)));
      m.setElement(i, 1, el);
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
}
