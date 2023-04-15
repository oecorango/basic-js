const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let number = n;
	let arr = (""+number).split("").map(Number);
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		res = res + arr[i];
	}
	if (res < 10) {
		return res;
	} else {
		let result = res.toString()
		let answer = 0;
		for (let i = 0; i < result.length; i++) {
			answer = answer + +result[i];
		}
		return answer;
	}
}
getSumOfDigits(1055);
module.exports = {
  getSumOfDigits
};
