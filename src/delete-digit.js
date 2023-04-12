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
	const str = n.toString();
	let res = '';
	for (let i = 0; i < str.length; i++) {
		if (str.length < 3) {
			if (str[i] > str[i + 1]) {
				res = +str[i];
			}
		} else {
			if (str.replace(str[i], '') > str.replace(str[i + 1], '')) {
				res = +str.replace(str[i], '');
			} 
		}
	}
	return res;
}

module.exports = {
  deleteDigit
};
