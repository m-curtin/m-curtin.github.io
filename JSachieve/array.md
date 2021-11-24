# 数组

## 常用API时间复杂度

### sort方法

```js
nums.sort((a, b) => a - b); // 从小到大

nums.sort((a, b) => b - a); // 从大到小
```

V8引擎中，对sort方法提供了2种排序算法：插入排序及快排序。

[sort参考链接](https://zhuanlan.zhihu.com/p/33626637)

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

### 解法二：哈希表
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


## 删除有序数组中的重复项

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例：

```
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

### 快慢指针解法：

定义fast、slow，快慢指针，快指针遍历当前数组，慢指针去替换当前项。


```js
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    let slow = 1;
    let fast = 1;
    while (fast < nums.length) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
```

### 复杂度

时间复杂度：O(n)
空间复杂度：O(1)


## 移除元素

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

```
示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

```
示例 2：
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```


```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!nums || nums.length === 0) {
        return null;
    }
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
```