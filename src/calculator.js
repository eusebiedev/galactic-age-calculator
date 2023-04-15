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

  yearsPassedVenus() {
    return Number (((this.solarAge - 50) / .62).toFixed());
  }

  yearsPassedMars() {
    return Number (((this.solarAge - 50) / 1.88).toFixed());
  }

  yearsPassedJupiter() {
    return Number (((this.solarAge - 50) / 11.86).toFixed());
  }

  yearsPassedEarth() {
    return Number (this.solarAge - 50);
  }

  yearsUntilEarth() {
    return Number (70 - this.solarAge);
  }

  yearsUntilMercury() {
    return Number (((70 - this.solarAge) / .24).toFixed(2));
  }

  yearsUntilVenus() {
    return Number (((70 - this.solarAge) / .62).toFixed(2));
  }

  yearsUntilMars() {
    return Number (((70 - this.solarAge) / 1.88).toFixed(2));
  }

  yearsUntilJupiter() {
    return Number (((70 - this.solarAge) / 11.88).toFixed(2));
  }
}

