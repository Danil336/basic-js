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

  // let arr1 = n.toString().split('').map(Number)
  // let w = arr1.indexOf(Math.min(...arr1))

  // if (w !== -1) {
  //   arr1.splice(w, 1);
  // }
  // return(+arr1.join(""))
  let ans = 0;
        let i = 1;
 
        // Remove the least digit
        // after every iteration
        while (parseInt(n / i) > 0) {
 
            // Store the numbers formed after
            // removing every digit once
            var temp = parseInt(n / (i * 10))
                           * i
                       + (n % i);
            i *= 10;
 
            // Compare and store the maximum
            ans = Math.max(ans, temp);
        }
 
        // Store the largest
        // number remaining
        n = ans;
    
 
    // Return the remaining number
    // after K removals
    return n;
}

module.exports = {
  deleteDigit
};
