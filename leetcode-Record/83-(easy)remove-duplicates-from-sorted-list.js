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

// 时间复杂度：O(n)
// 空间复杂度：O(1)

var deleteDuplicates = function(head) {
    let p1 = head;
    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next || null;
        } else {
            head = head.next;
        }
    }
    return p1;
};