const checkCapitalized = require('./capitalize');

test('is first character of string capitalized', () => {
  expect(checkCapitalized('hello')).toBe('Hello');
});
