const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
	const number = str * 1;
	if (typeof str === 'string' && number > 0 && number < 15) {
		const result = Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / number));
		return result;
	} else { 
		return false;
	}
}

module.exports = {
  dateSample
};
