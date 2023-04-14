import Calculator from './../src/calculator.js';

describe('Calculator', () => {

  test('should create a calculator object with default age propery', () => {
    const calculator = new Calculator(60);
    expect(calculator.age).toEqual(60);
  });
});