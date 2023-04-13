const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const customObj = {
		repeatTimes: 1,
		separator: '+',
		addition: '',
		additionRepeatTimes: 1,
		additionSeparator: '|',
	};
	const currentOptions = {...customObj, ...options};
	const string = str;
	const separatorLength = currentOptions.separator.length;
	const additionSeparatorLength = currentOptions.additionSeparator.length;
	const addition = ((currentOptions.addition + currentOptions.additionSeparator).repeat(currentOptions.additionRepeatTimes).slice(0, -(additionSeparatorLength)))
	return ((string + addition + currentOptions.separator).repeat(currentOptions.repeatTimes).slice(0, -(separatorLength)))

}

module.exports = {
  repeater
};
