export default class Calculator {
  constructor(solarAge) {
    this.solarAge = solarAge;
  }

  mercuryAge(){
    return Number (this.solarAge / .24);
  }
}
