import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator(60);
  });

  // 1st Test
  test('should create a calculator object with default age propery', () => {
    expect(calculator.solarAge).toEqual(60);
  });

  // 2nd Test
  test('should return a users age in mercury years', () => {
    expect(calculator.mercuryAge).toEqual(250);
  })
});