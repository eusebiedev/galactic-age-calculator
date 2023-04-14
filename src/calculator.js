export default class Calculator {
  constructor(solarAge) {
    this.solarAge = solarAge;
  }

  mercuryAge(){
    return Number (this.solarAge / .24);
  }

  venusAge(){
    return Number ((this.solarAge / .62).toFixed(2));
  }

  marsAge(){
    return Number ((this.solarAge / 1.88).toFixed(2));

  }
}
