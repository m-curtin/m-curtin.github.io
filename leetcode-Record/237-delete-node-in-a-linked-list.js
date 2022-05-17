/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
    // 时间复杂度：O(1) 空间复杂度O(1)
    // 既然不能先删除自己，那就把自己的值变成儿子，再把儿子的位置让给孙子

    node.val = node.next.val;
    node.next = node.next.next;
};

