const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let arr1 = n.toString().split('').map(Number)
  let w = arr1.indexOf(Math.min(...arr1))

  if (w !== -1) {
    arr1.splice(w, 1);
  }
  return(+arr1.join(""))
}

module.exports = {
  deleteDigit
};
