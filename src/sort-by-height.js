const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const index1 = []
	const filterArr = arr.filter((element, index) => {
		if (element < 0) {
			index1.push(index);
		}
		return element >= 0;
	})
	filterArr.sort((a, b) => a - b);
	for (let i = 0; i < index1.length; i++) {
		filterArr.splice(index1[i], 0, -1)
	}
	return filterArr;
}
sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
module.exports = {
  sortByHeight
};
