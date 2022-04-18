/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const resultMap = {};
    const strList = s.split('');
    strList.map(item => {
        if(resultMap[item]) {
            resultMap[item] +=1;
        } else {
            resultMap[item] = 1;
        }
    })
    for (let x in resultMap) {
        if (resultMap[x] === 1) {
            return strList.indexOf(x);
        }
    }
    return -1;
};