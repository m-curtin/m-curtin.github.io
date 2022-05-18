## 概念

概念：树是用来模拟具有树状结构性质的数据集合。根据它的特性可以分为非常多的种类，对于我们来讲，掌握二叉树这种结构就足够了，它也是树最简单、应用最广泛的种类。

> 二叉树是一种典型的树树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称作“左子树”和“右子树”。

![](https://raw.githubusercontent.com/Nonentityboy/PicGoToGitHub/study_note_blog/20220517232305.png)


## 二叉树
树拥有很多种结构，二叉树是树中最常用的结构，同时也是一个天然的递归结构。

二叉树拥有一个根节点，每个节点至多拥有两个子节点，分别为：左节点和右节点。

树的最底部节点称之为叶节点，当一颗树的叶数量数量为满时，该树可以称之为满二叉树。

## 二分搜索树

二分搜索树也是二叉树，拥有二叉树的特性。但是区别在于二分搜索树每个节点的值都比他的左子树的值大，比右子树的值小。

这种存储方式很适合于数据搜索。如下图所示，当需要查找 6 的时候，因为需要查找的值比根节点的值大，所以只需要在根节点的右子树上寻找，大大提高了搜索效率。



## 二叉树的中序遍历

[二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

> 二叉树的中序遍历：按照访问`左子树——根节点——右子树`的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树。

### 解析

-  取跟节点为目标节点，开始遍历
-  1.左孩子入栈 -> 直至左孩子为空的节点
-  2.节点出栈 -> 访问该节点
-  3.以右孩子为目标节点，再依次执行1、2、3

```js
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
```

## 二叉树的前序遍历

> `根节点——左子树——右子树`的方式遍历这棵树，而在访问左子树或者右子树的时候，我们按照同样的方式遍历。

-   取跟节点为目标节点，开始遍历
-   1.访问目标节点
-   2.左孩子入栈 -> 直至左孩子为空的节点
-   3.节点出栈，以右孩子为目标节点，再依次执行1、2、3




## 二叉树中序遍历

### 题目

给定一个二叉树，返回它的 中序 遍历。

示例:

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,3,2]
```

### 代码

递归实现

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, array = []) {
    if (root) {
        inorderTraversal(root.left, array);
        array.push(root.val);
        inorderTraversal(root.right, array);
        // 前序遍历
        // array.push(root.val);
        // preorderTraversal(root.left, array);
        // preorderTraversal(root.right, array);
        // 后序遍历
        // postorderTraversal(root.left, array);
        // postorderTraversal(root.right, array);
        // array.push(root.val);
    }
    return array;
};
```

