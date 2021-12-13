/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate1 = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
};

var containsDuplicate2 = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};
