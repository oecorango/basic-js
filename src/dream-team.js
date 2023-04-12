const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (Array.isArray(members)) {
		const nameTeam = members.map((elem) => { 
			if (typeof elem === 'string') {
				return (elem.replace(/ /g, '').slice(0, 1).toLocaleUpperCase()) //  elem[0]
			}})
			console.log(nameTeam.sort().join().slice('').toLocaleUpperCase().replace(/,/g, ''))
		 return nameTeam.sort().join().slice('').replace(/,/g, '');
	} else return false;

}

module.exports = {
  createDreamTeam
};
