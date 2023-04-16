const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
		const array = [...arr];
		let count = 1;
		let depth = 1;
		for (let elem of array) {
			if (Array.isArray(elem)) {
				count = this.calculateDepth(elem) + 1;
			}	if (count >= depth) {
				depth = count;
			}
		}
		return depth;
  }
}

module.exports = {
  DepthCalculator
};
