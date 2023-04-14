export default class Calculator {
  constructor(solarAge) {
    this.solarAge = solarAge;
  }

  mercuryAge() {
    return Number (this.solarAge / .24);
  }

  venusAge() {
    return Number ((this.solarAge / .62).toFixed(2));
  }

  marsAge() {
    return Number ((this.solarAge / 1.88).toFixed(2));
  }

  jupiterAge() {
    return Number ((this.solarAge / 11.86).toFixed(2));
  }

  yearsPassedMercury() {
    return Number (((this.solarAge - 50) / .24).toFixed());
  }

}

