# 二叉树

概念：树是用来模拟具有树状结构性质的数据集合。根据它的特性可以分为非常多的种类，对于我们来讲，掌握二叉树这种结构就足够了，它也是树最简单、应用最广泛的种类。

> 二叉树是一种典型的树树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称作“左子树”和“右子树”。

![](https://raw.githubusercontent.com/Nonentityboy/PicGoToGitHub/study_note_blog/20220517232305.png)

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

