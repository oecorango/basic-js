const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	const err = Error('Invalid date!');

	if (date == null) { return 'Unable to determine the time of year!' }
	if (date.hasOwnProperty('toString')) { throw err }
		
	const month = new Date(date).getMonth();
	
	// if (typeof date === 'string'|| typeof date === 'number' || month == NaN) { throw err }
	
	if (month < 2 || month === 11) {
		return 'winter';
	} if (month >= 2 && month < 5) {
		return 'spring';
	} if (month >= 5 && month < 8) {
		return 'summer';
	} if (month >= 8 && month < 11) {
		return 'autumn';
	}
}

module.exports = {
  getSeason
};
