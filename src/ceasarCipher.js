function ceasarCipher(word, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    let isMatched = false;
    for (let j = 0; j < alphabet.length; j++) {
      if (word[i] === alphabet[j]) {
        let newLetter = j + num;
        if (newLetter > alphabet.length - 1) {
          newLetter -= alphabet.length;
        }
        newWord += alphabet[newLetter];
        isMatched = true;
        break;
      }
    }
    if (!isMatched && /^[ .,:!?0-9]/.test(word[i])) {
      newWord += word[i];
    }
  }
  return newWord;
}

module.exports = ceasarCipher;
