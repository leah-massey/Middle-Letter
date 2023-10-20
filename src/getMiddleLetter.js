const getMiddleLetter = function (word) {
  const wordArray = word.split("");
  const wordLength = wordArray.length;

  if (wordLength % 2 === 0) {
    const firstLetter = wordArray[wordLength / 2 - 1];
    const secondLetter = wordArray[wordLength / 2];

    return firstLetter + secondLetter;
  } else {
    return wordArray[(wordLength - 1) / 2];
  }
};

module.exports = getMiddleLetter;
