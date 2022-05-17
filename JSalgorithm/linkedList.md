# 链表

## 概念
* 链表里元素存储不连续，之间通过 next 连接
* js中没有链表，可以通过object模拟
* 常用操作：修改next、遍历链表
* JavaScript中原型链就是一个链表
* 使用链表指针可以获取 JSON 的节点值


## 从头到尾打印链表

### 题目
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = [];
    while (head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
};
```





## 删除链表中的一个节点


### 题目

[leetcode-24](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

题目数据保证需要删除的节点 不是末尾节点 。

![](https://assets.leetcode.com/uploads/2020/09/01/node1.jpg)

```
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9
```

```js
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
    // 既然不能先删除自己，那就把自己的值变成儿子，再把儿子的位置让给孙子
    node.val = node.next.val;
    node.next = node.next.next;
};
```

### 复杂度
时间复杂度：O(1)
空间复杂度：O(1)

## 反转链表

```js
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

```


## 判断链表是否有环

```js
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
```

# 待学习
## 合并两个排序的链表

## 链表倒数第K个节点

## 两个链表的第一个公共节点

## 圈圈中最后剩下的数字

## 删除链表中的节点or重复的节点