const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  let emailArr = email.split('')
  emailArr = emailArr.slice(email.lastIndexOf('@')+1, emailArr.length).join('')
  return emailArr
}

module.exports = {
  getEmailDomain
};
