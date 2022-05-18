# 链表

## 概念
* 链表里元素存储不连续，之间通过 next 连接
* js中没有链表，可以通过object模拟
* 常用操作：修改next、遍历链表
* JavaScript中原型链就是一个链表
* 使用链表指针可以获取 JSON 的节点值

用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址。

-  需要遍历才能查询到元素，查询慢。
-  插入元素只需断开连接重新赋值，插入快。

链表在开发中也是经常用到的数据结构，`React16`的 `Fiber Node`连接起来形成的`Fiber Tree`, 就是个单链表结构。


## 从头到尾打印链表

### 题目
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

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

## 合并两个排序的链表

### 题目

[合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const preHead = new ListNode(-1);
    let prev = preHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return preHead.next;
};
```

### 复杂度
时间复杂度：O(n + m)，其中 n 和 m 分别为两个链表的长度。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 O(n+m) 。

空间复杂度：O(1) 。我们只需要常数的空间存放若干变量。

```JS
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

```

### 复杂度
时间复杂度：O(n + m) ，其中 n 和 m 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(n+m)。

空间复杂度：O(n + m) ，其中 n 和 m 分别为两个链表的长度。递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 n+m 次，因此空间复杂度为 O(n+m)。


## 链表中倒数第k个节点

[剑指 Offer 22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let node = head;
    let n = 0;
    while (node) {
        node = node.next;
        n++;
    }
    node = head;
    for (let i = 0; i < n - k; i++) {
        node = node.next;
    }
    return node;
};
```

### 复杂度
- 时间复杂度：O(n),其中 n 为链表的长度。需要两次遍历。
- 空间复杂度：O(1)


快慢指针的思想。我们将第一个指针 fast 指向链表的第 k + 1 个节点，第二个指针 slow 指向链表的第一个节点，此时指针 fast 与 slow 二者之间刚好间隔 k 个节点。此时两个指针同步向后走，当第一个指针 fast 走到链表的尾部空节点时，则此时slow 指针刚好指向链表的倒数第k个节点。

```JS
var getKthFromEnd = function(head, k) {
    let fast = head, slow = head;

    while (fast && k > 0) {
        [fast, k] = [fast.next, k - 1];
    }
    while (fast) {
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};

```

### 复杂度
- 时间复杂度：O(n),其中 n 为链表的长度。需要两次遍历。
- 空间复杂度：O(1)



##  两个链表的第一个公共节点

[剑指 Offer 52. 两个链表的第一个公共节点](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)


### 题目分析：

情况一：两个链表相交，遍历一次后，`return null`

情况二：两个链表不相交，每个指针遍历两个链表各一次后，返回相应节点

```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA;
    let pB = headB;
    while(pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
```

### 复杂度

- 时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。
- 空间复杂度：O(1)。


## 圆圈中最后剩下的数字

[剑指 Offer 62. 圆圈中最后剩下的数字](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)

约瑟夫环问题

[conardli 约瑟夫环](http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%9C%88%E5%9C%88%E4%B8%AD%E6%9C%80%E5%90%8E%E5%89%A9%E4%B8%8B%E7%9A%84%E6%95%B0%E5%AD%97.html#%E9%A2%98%E7%9B%AE)

### 题目思路

- 1.经典约瑟夫环问题，递推公式为：f(n) = (f(n - 1) + m) % n
- 2.根据规律可以发现，最后剩下的数字（假设为X）的位置向左移动了 m 位，也就是减少了 m，所以逆推 X 的位置时就要加上 m 就是公式中的 f(n) = (f(n - 1) + m) % n
- 3.注意：n 是会随着个数的变化而改变，当 + m 后超过当前的总个数 n 时，需要回到队头重新计数，即需要进行取模运算


```JS
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // base case 最终活下来那个人的初始位置 当i为1时，当然是索引0啦
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
  }
  return pos;
};

```

## 删除链表的指定节点

[剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(!head) return head;

    let newHead = new ListNode(0, head), p = newHead;
    while(p.next) {
        if(p.next.val === val) {
            // 删除后直接返回就行了，减少点时间
            p.next = p.next.next;
            return newHead.next;
        }
        p = p.next;
    }
    return null;
};
```

## 删除排序链表中的重复元素



[删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

```
输入： head = [1,1,2]
输出： [1,2]
```

```JS
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
var deleteDuplicates = function(head) {
    if (!head) return null;
    while(head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
        }
        else {
            head = head.next;
        }
    }
    return head;
};
```

### 复杂度
- 时间复杂度： O(n)
- 空间复杂度： O(1)

## 删除排序链表中的重复元素 II

[删除排序链表中的重复元素 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/)

```
输入： head = [1,2,3,3,4,4,5]
输出： [1,2,5]
```


```js
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
var deleteDuplicates = function(head) {
    if (!head) return null;
    let node = new ListNode(-1);
    node.next = head;
    let cur = node;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let currentVal = cur.next.val;
            // cur的当前 next 指向next的next
            while (cur.next && cur.next.val === currentVal) {
                cur.next = cur.next.next;
            }
        }
        else {
            cur = cur.next
        }
    }
    return node.next;
};
```

### 复杂度分析

-  时间复杂度：O(n)，其中 n 是链表的长度。
-  空间复杂度：O(1)。
