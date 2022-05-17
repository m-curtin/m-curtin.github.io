/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 时间复杂度：O(n)
// 空间复杂度：O(n)

var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;

    let carry = 0;
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry; // 当前p1，p2 之和，carry取前一个节点的和
        carry = Math.floor(val / 10); // 大于10时，取1，反之取0
        p3.next = new ListNode(val % 10); // 取个位数为当前节点值
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;

        console.log(p1 && p1.val, p2 && p2.val );
    }
    // 判断首位数字是否进1
    if (carry) {
        p3.next = new ListNode(carry);
    }
    return l3.next;
};