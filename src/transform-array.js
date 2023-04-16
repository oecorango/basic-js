const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	const err = new Error('\'arr\' parameter must be an instance of the Array!');
	if (!Array.isArray(arr)) throw err;
	if (arr.length === 0) return arr;
	let array = arr.filter(element => element !== undefined)
	let res = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i - 1] === '--discard-next') {
			res.pop() 
		} else if (array[i] === '--discard-prev' && array[i - 2] === '--discard-next') {
			
		} else if (array[i] === '--discard-prev') {
			res.pop()
		} else if (array[i] === '--double-next') {
			res.push(array[i + 1])
		} else if (array[i] === '--double-prev' && array[i - 2] === '--discard-next') {
			res.push('')
		} else if (array[i] === '--double-prev') {
			res.push(array[i - 1])
		} else res.push(array[i])
	}
	return (res.filter(element => element !== '').filter(element => element !== undefined).filter(element => element !== '--discard-prev').filter(element => element !== '--discard-next'))
}

module.exports = {
  transform
};
