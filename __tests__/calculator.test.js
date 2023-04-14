import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let age;
  beforeEach(() => {
    age = new Calculator(60);
  });

  // 1st Test
  test('should create a calculator object with default age property', () => {
    expect(age.solarAge).toEqual(60);
  });

  // 2nd Test
  test('should return a users age in mercury years', () => {
    expect(age.mercuryAge()).toEqual(250);
  })

  // 3rd Test
  test('should return a users age in venus years', () => {
    expect(age.venusAge()).toEqual(96.77);
  })

  
  test('should return a users age in mars year', () => {
    expect(age.marsAge()).toEqual(31.91);
  })
});