/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 时间复杂度：O(n)
// 空间复杂度：O(1)

var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true
        }
    }
    return false;
};

// 快慢指针判断链表是否有环；哈希表存储Node