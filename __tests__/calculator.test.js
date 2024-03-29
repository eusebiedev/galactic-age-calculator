import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let age;

  beforeEach(() => {
    age = new Calculator(60);
  });

  test('should create a calculator object with earth age property', () => {
    expect(age.solarAge).toEqual(60);
  });

  test('should return a users age in mercury years', () => {
    age.mercuryAge();
    expect(age.mercuryAge()).toEqual(250);
  });

  test('should return a users age in venus years', () => {
    age.venusAge();
    expect(age.venusAge()).toEqual(96.77);
  });

  test('should return a users age in mars years', () => {
    age.marsAge();
    expect(age.marsAge()).toEqual(31.91);
  });

  test('should return a users age in jupiter years', () => {
    age.jupiterAge();
    expect(age.jupiterAge()).toEqual(5.06);
  });

  test('should return how many years have passed on mercury since past birthday of 50', () => { 
    age.yearsPassedMercury();
    expect(age.yearsPassedMercury()).toEqual(42);
  });

  test('should return how many years have passed on venus since past birthday of 50', () => {
    age.yearsPassedVenus();
    expect(age.yearsPassedVenus()).toEqual(16);
  });

  test('should return how many years have passed on mars since past birthday of 50', () => {
    age.yearsPassedMars();
    expect(age.yearsPassedMars()).toEqual(5);
  });

  test('should return how many years have passed on jupiter since past birthday of 50', () => {
    age.yearsPassedJupiter();
    expect(age.yearsPassedJupiter()).toEqual(1);
  });

  test('should return how many years have passed on earth since last birthday of 50', () => {
    age.yearsPassedEarth();
    expect(age.yearsPassedEarth()).toEqual(10);
  })

  test('should return how many years until future 70th birthday on earth', () => {
    age.yearsUntilEarth();
    expect(age.yearsUntilEarth()).toEqual(10);
  });

  test('should return how many years have yet to pass until future 70th birthday on mercury', () => {
    age.yearsUntilMercury();
    expect(age.yearsUntilMercury()).toEqual(41.67);
  });

  test('should return how many years have yet to pass until future 70th birthday on venus', () => {
    age.yearsUntilVenus();
    expect(age.yearsUntilVenus()).toEqual(16.13);
  });

  test('should return how many years have yet to pass until future 70th birthday on mars', () => {
    age.yearsUntilMars();
    expect(age.yearsUntilMars()).toEqual(5.32);
  });

  test('should return how many years have yet to pass until future 70th birthday on jupiter', () => {
    age.yearsUntilJupiter();
    expect(age.yearsUntilJupiter()).toEqual(.84);
  });
});