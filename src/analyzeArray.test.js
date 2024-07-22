const analyzeArray = require('./analyzeArray');

test('take in an array and return the average', () => {
  expect(analyzeArray.average([1, 8, 3, 4, 2, 6])).toBe(4);
});

test('take in an array and return the lowest number', () => {
  expect(analyzeArray.min([1, 8, 3, 4, 2, 6])).toBe(1);
});

test('take in an array and return the largest number', () => {
  expect(analyzeArray.max([1, 8, 3, 4, 2, 6])).toBe(8);
});

test('take in an array and return the length of the array', () => {
  expect(analyzeArray.length([1, 8, 3, 4, 2, 6])).toBe(6);
});
