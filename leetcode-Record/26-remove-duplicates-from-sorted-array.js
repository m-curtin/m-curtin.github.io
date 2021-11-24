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