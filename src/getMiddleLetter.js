const getMiddleLetter = function (word) {
  const wordArray = word.split("");
  const wordLength = wordArray.length;

  return wordArray[(wordLength - 1) / 2];
};

module.exports = getMiddleLetter;
