/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        sum = Math.max(sum += num, num);
        ans = Math.max(ans, sum);
    }
    return ans;
};