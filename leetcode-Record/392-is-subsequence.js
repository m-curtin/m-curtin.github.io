/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 双指针

var isSubsequence = function(s, t) {
    const childArr = s.split('');
    const arr = t.split('');
    let i = 0, j = 0;
    while(i < childArr.length && j < arr.length) {
        if (childArr[i] === arr[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === childArr.length;
};