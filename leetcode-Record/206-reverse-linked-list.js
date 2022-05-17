/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// 时间复杂度：O(n)
// 空间复杂度：O(1)

var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        // 暂存后继节点
        let tmp = p1.next;
        // 修改引用指向，指向新链表
        p1.next = p2;
        // 暂存当前节点
        p2 = p1;
        // 访问下一节点
        p1 = tmp;
    }
    return p2;
};
