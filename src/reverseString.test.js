const checkReverse = require('./reverseString');

test('check if string reversed', () => {
  expect(checkReverse('hello')).toBe('olleh');
});
