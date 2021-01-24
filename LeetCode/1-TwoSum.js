/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// brute-force O(N^2)
	// for each number, use another pointer to iterate through the rest
	// return the two pointers if their sum == target

	// using hashmap O(N)
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		// key (the number we need) - value (index of the complement)
		// when we do find a match in the map, then we return the current index and the matching value
		let mapping = map[nums[i]];
		if (mapping != undefined) {
			return [i, mapping];
		} else {
			map[target - nums[i]] = i;
		}
	}
};
