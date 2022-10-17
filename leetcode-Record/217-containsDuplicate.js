/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
};

// map 与 set 区别及常用方法：https://www.liaoxuefeng.com/wiki/1022910821149312/1023024181109440
var containsDuplicate2 = function(nums) {
    let objSet = new Set();
    for (const x of nums) {
        if (objSet.has(x)) {
            return true;
        }
        objSet.add(x);
    }
    return false;
};
