const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  
  let final = ''
  let final2 = []
  
  // if(!(repeatTimes in options)){
  //   options[repeatTimes] = 1
  // }
  // if(!(additionRepeatTimes in options)){
  //   options[additionRepeatTimes] = 1
  // }
  // if(!(separator in options)){
  //   options[separator] = ''
  // }
  // if(!(addition in options)){
  //   options[addition] = ''
  // }
  // if(!(additionSeparator in options)){
  //   options[additionSeparator] = ''
  // }

  let sepLength = options.separator.length
  // let addLength = options.addition.length
  let additionStr = options.addition.repeat(options.additionRepeatTimes)
  let additionArr = additionStr.split('')
  for(let i = options.addition.length; i < additionArr.length; i += (options.addition.length + 1)){
      additionArr.splice(i, 0, options.additionSeparator)
  }
  additionArr.push(options.separator)
  additionStr = str + additionArr.join('')
  
  final = additionStr.repeat(options.repeatTimes).split('')
  
  for(let i = 0; i < (final.length - sepLength); i++){
    final2.push(final[i])
  }
  final2 = final2.join('')
  return final2
}
module.exports = {
  repeater
};
