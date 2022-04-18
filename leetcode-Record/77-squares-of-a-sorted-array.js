/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const newNumList = nums.map(item => item * item);
    return newNumList.sort((a, b) => a - b);
};

