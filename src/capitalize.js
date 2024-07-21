function checkCapitalized(word) {
  let newWord = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word[i];
  }
  return newWord;
}

module.exports = checkCapitalized;
