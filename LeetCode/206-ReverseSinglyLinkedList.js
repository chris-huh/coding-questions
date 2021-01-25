/**
 * Reverse a singly linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head == null) return null;

	let prev = head;
	let curr = head.next;

	prev.next = null;

	while (curr != null) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
};
