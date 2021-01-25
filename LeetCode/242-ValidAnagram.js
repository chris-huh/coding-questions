/*
Given two strings s and t , write a function to determine if t is an anagram of s.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	let map = {};
	for (let i = 0; i < s.length; i++) {
		const sChar = s[i];
		const tChar = t[i];
		sChar in map ? map[sChar]++ : (map[sChar] = 1);
		tChar in map ? map[tChar]-- : (map[tChar] = -1);
	}

	let same = true;
	Object.entries(map).forEach(([key, val]) => {
		if (val !== 0) {
			console.log('hello');
			same = false;
		}
	});

	return same;
};
