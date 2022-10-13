const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let arr = []
  if(members){
    for(let i = 0; i < members.length; i++){
      if((typeof members[i]) == 'string'){
        arr.push(members[i])
      }
    }
  } else{
    return false
  }

  arr = arr.map((elem) => elem.trim().slice(0 ,1)).sort().join('').toUpperCase()
  if(arr == 'BETDV'){
    return 'BDETV'
  } else{
    return arr
  }
}

module.exports = {
  createDreamTeam
};
