const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let column = matrix[0].length;
	let count = 0;
	for (i = 0; i < column; i++) {
		for (x = 0; x < matrix.length; x++) {
			if (matrix[x][i] !== 0) {
				count += matrix[x][i]
			} else break;
		}
	}
	return count;
}

module.exports = {
  getMatrixElementsSum
};
