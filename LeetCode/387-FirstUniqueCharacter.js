/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	// brute-force - two pass - O(N)
	let map = {};
	for (let i = 0; i < s.length; i++) {
		s[i] in map ? map[s[i]]++ : (map[s[i]] = 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] == 1) {
			return i;
		}
	}

	return -1;
};
