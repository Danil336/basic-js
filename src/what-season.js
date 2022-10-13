const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let a = ''
  if(isNaN(Date.parse(date))){
    throw new NotImplementedError("Invalid date!");
  }
  try{
    if((((date.getMonth()+1) >= 1) && ((date.getMonth()+1) <= 2)) || ((date.getMonth()+1) == 12)){
      a = 'winter'
    }
    if(((date.getMonth()+1) >= 3) && ((date.getMonth()+1) <= 5)){
      a = 'spring'
    }
    if(((date.getMonth()+1) <= 8) && ((date.getMonth()+1) >= 6)){
      a = 'summer'
    }
    if(((date.getMonth()+1) >= 9) && ((date.getMonth()+1) <= 11)){
      a = 'autumn'
    }
  } catch{
    throw new Error("Invalid date!");
  }
  if(date.getYear() < 1900){
    throw new NotImplementedError("Invalid date!");
  } else{
    return a
  }
}

module.exports = {
  getSeason
};
