const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
`  * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  
  let lengthElem = [];
  let obj = {};
  let count = 1;
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split(".");
    domains[i] = domains[i].map((elem) => "." + elem);
    lengthElem.push(domains[i].length);
    domains[i] = domains[i].reverse();
  }
  let q = 0;
  for (let i = 0; i < domains.length; i++) {
    console.log(`${domains[i][0]}${domains[i][1]}`);
  
    if (domains[i][0] in obj) {
      obj[domains[i][0]]++;
    } else {
      obj[domains[i][0]] = 1;
    }
  
    if (`${domains[i][0]}${domains[i][1]}` in obj) {
      obj[`${domains[i][0]}${domains[i][1]}`]++;
    } else {
      obj[`${domains[i][0]}${domains[i][1]}`] = 1;
    }
    
    if(domains[i][2]){
    if (`${domains[i][0]}${domains[i][1]}${domains[i][2]}` in obj) {
      obj[`${domains[i][0]}${domains[i][1]}${domains[i][2]}`]++;
    } else {
      obj[`${domains[i][0]}${domains[i][1]}${domains[i][2]}`] = 1;
    }
  }
  }
  return obj
}

module.exports = {
  getDNSStats
};
