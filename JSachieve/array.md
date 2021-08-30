# 数组

## 存在重复元素问题

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

```
示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

### 解法一：排序后求相邻元素是否相同

将给定数组进行排序，排序后看相邻元素是否相同，然后判断数组是否有相同元素。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i= 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
};
```

### 方法二：哈希表
对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};
```

## 两数求和问题

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那`两个整数`，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```


### 解法一：暴力双重for循环

略

### 解法二：利用Map结构

* 用 hashMap 存储遍历过的元素和对应的索引。
* 每遍历一个元素，看看 hashMap 中是否存在满足要求的目标数字。
* 所有事情在一次遍历中完成（空间换取时间）

[![D1H37T.md.png](https://s3.ax1x.com/2020/11/21/D1H37T.md.png)](https://imgchr.com/i/D1H37T)


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffs = {};
    let len = nums.length;
    for( let i = 0; i < len; i++) {
        if(diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        }
        diffs[nums[i]] = i;
    }
};
```
