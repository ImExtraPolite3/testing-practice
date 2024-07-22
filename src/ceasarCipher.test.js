const ceasarCipher = require('./ceasarCipher');

test('take a string and apply the ceasar cipher to it', () => {
  expect(ceasarCipher('xyz', 3)).toBe('abc');
});

test('take a string and apply the ceasar cipher to it', () => {
  expect(ceasarCipher('i like to wear hats.', 3)).toBe('l olnh wr zhdu kdwv.');
});

test('take a string and apply the ceasar cipher to it', () => {
  expect(ceasarCipher('123', 3)).toBe('123');
});

test('take a string and apply the ceasar cipher to it', () => {
  expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
