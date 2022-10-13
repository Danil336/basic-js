const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  let arr = str.split('')
let finalArr = []
let count = 1
for(let i = 0; i < arr.length; i++){
  if(arr[i] == arr[i+1]){
    count++
  } else{
    finalArr.push((''+count) + arr[i])
    count = 1
  }
}
return finalArr.join('').replaceAll('1', '')

}

module.exports = {
  encodeLine
};
