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
	if (Date.parse(date)) {
		const month = new Date(date).getMonth();
		if (month < 2 || month === 11) {
			console.log('winter')
			return 'winter';
		} if (month >= 2 && month < 5) {
			console.log('spring')
			return 'spring';
		} if (month >= 5 && month < 8) {
			console.log('summer')
			return 'summer';
		} if (month >= 8 && month < 11) {
			console.log('autumn')
			return 'autumn';
		}
	} else return
}

getSeason(new Date(1456, 0, 2, 1, 50, 9, 238))


module.exports = {
  getSeason
};
