const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  let index = []
for(let j = 0; j < matrix.length; j++){
  for(let i = 0; i < matrix[j].length; i++){
    if(matrix[j][i] == 0){
      index.push(i)
    }
    try{
    for(let k = 0; k < index.length; k++){
      matrix[j+1][index[k]] = 0
    }
  } catch{
    
  }
  }
}
  return matrix.flat().reduce((a,b) => a+b)
}

module.exports = {
  getMatrixElementsSum
};
