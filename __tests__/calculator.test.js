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
});