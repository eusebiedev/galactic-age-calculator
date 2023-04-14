import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let age;
  beforeEach(() => {
    age = new Calculator(60);
  });

  // 1st Test
  test('should create a calculator object with default age propery', () => {
    expect(age.solarAge).toEqual(60);
  });

  // 2nd Test
  test('should return a users age in mercury years', () => {
    expect(age.mercuryAge()).toEqual(250);
    
  })
});