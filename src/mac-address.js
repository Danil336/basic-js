const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');

  return /^[0-9A-F]{2}(?:-[0-9A-F]{2}){5}$/.test(n);

//   if (!(n.length == 17)){
//     return false
//   }

// n = n.split('-')

// if(!(!n.length == 6)){
//   return false
// }

// for(let i = 0; i < n.length; i++){
//   if (!(n.length == 2)){
//       return false
//   }
//   if ((("0" <= n[i][0] && n[i][0] <= "9") || ("A" <= n[i][0] && n[i][0] <="F")) && (("0" <= n[i][1] && n[i][1] <= "9") || ("A" <= n[i][1] && n[i][1] <= "F"))){
//     return true
//   }
//   else{
//     return false
//       }
// }
}
module.exports = {
  isMAC48Address
};
