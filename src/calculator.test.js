const calculator = require('./calculator');

test('take in two number and adds', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('take in two number and subtracts', () => {
  expect(calculator.subtract(2, 1)).toEqual(1);
});

test('take in two number and multiplys', () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test('take in two number and divides', () => {
  expect(calculator.divide(4, 4)).toEqual(1);
});
