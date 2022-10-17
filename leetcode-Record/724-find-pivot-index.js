/**
 * @param {number[]} nums
 * @return {number}
 */

// 寻找数组的中心下标： 2sum + nums[i] === total
var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if (total === 2 * sum + nums[i]) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};