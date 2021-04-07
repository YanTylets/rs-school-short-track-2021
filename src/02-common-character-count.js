/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let news2 = s2;
  let n = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < news2.length; j++) {
      if (s1[i] === news2[j]) {
        n += 1;
        news2 = news2.replace(news2[j], '');
        break;
      }
    }
  }
  return n;
}

module.exports = getCommonCharacterCount;
