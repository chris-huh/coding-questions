/* 
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	// Two pointers O(N)
	let start = 0,
		end = s.length - 1;
	while (start < end) {
		[s[start], s[end]] = [s[end], s[start]]; // new in ES6!
		start++;
		end--;
	}

	// JS built-in function
	// s.reverse();
};
