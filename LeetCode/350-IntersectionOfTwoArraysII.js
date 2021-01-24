/*
Given two arrays, write a function to compute their intersection.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	res = [];
	// brute-force
	// nums1.forEach((num) => {
	//     let i = nums2.indexOf(num);
	//     if (i != -1) { // found
	//         // save and remove from nums2
	//         res.push(num);
	//         nums2.splice(i, 1);
	//     }
	// });

	// hashmap
	let count = {};
	for (let i = 0; i < nums1.length; i++) {
		let num = nums1[i];
		count[num] = count[num] ? count[num] + 1 : 1;
	}

	for (let i = 0; i < nums2.length; i++) {
		let num = nums2[i];
		if (count[num] > 0) {
			count[num]--;
			res.push(num);
		}
	}

	return res;
};
