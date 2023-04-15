const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
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
	const obj = {};
	const arr = domains.map(e => e.split('.').reverse()).flat();
	let count = {};
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
		obj[`.${arr[i]}`] = count;
	}
	
	for (let elem of arr) {
    if (count[elem] === undefined) {
    count[elem] = 1;
    } else {
    count[elem]++;
    }
	}
	console.log(count)
}

// getDNSStats(['epam.com', 'info.epam.com'])

module.exports = {
  getDNSStats
};
