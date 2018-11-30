import { Calculator } from './calculator';

describe('Caculator', () => {

  it('should had numbers', () => {
    const calculator = new Calculator();

    const sum = calculator.add(3, 2);
    expect(sum).toBe(5);
  });
});
