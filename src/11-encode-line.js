/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] === str[j]) {
        n++;
        break;
      } else if (str[i] !== str[j] && n === 1) {
        newStr += str[i];
        break;
      } else {
        newStr += n + str[i];
        n = 1;
        break;
      }
    }
  }
  return newStr;
}

module.exports = encodeLine;
