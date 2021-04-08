/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.filter((item) => item >= 0).sort((a, b) => a - b);
  const newArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr2.push(arr[i]);
    } else {
      newArr2.push(newArr[0]);
      newArr.splice(0, 1);
    }
  }
  return newArr2;
}

module.exports = sortByHeight;
