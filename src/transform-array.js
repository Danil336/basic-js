const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if(Array.isArray(arr)){
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf('--discard-next') != -1){
      if(i == arr.indexOf('--discard-next')){
        arr.splice(i, 2)
      }
    }
    if(arr.indexOf('--discard-prev') != -1){
      if(i == arr.indexOf('--discard-prev')){
        arr.splice(i-1, 2)
      }
    }
    if(arr.indexOf('--double-next') != -1){
      if(i == arr.indexOf('--double-next')){
        arr.splice(i, 1, arr[i+1])
      }
    }
    if(arr.indexOf('--double-prev') != -1){
      if(i == arr.indexOf('--double-prev')){
        arr.splice(i, 1, arr[i-1])
      }
    }
  }
  return arr
  } else{
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
