/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] != 0) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
            slow++;
        }
        fast++;
    }
    return nums;
};