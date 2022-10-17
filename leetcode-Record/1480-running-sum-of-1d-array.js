/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 题目：一维数组的动态和
var runningSum = function(nums) {
    const newArr = [];
    let runningSum = 0;
    for(let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        if (i === 0) {
            newArr.push(nums[i]);
        } else {
            newArr.push(runningSum);
        }
    }
    return newArr;
};

// 优化方案：从下标为1开始遍历数组

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++ ) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
