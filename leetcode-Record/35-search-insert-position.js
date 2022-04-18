/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (target <= nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};