var firstUniqChar = function (s) {
    const resultMap = {};
    const strList = s.split('');
    strList.map(item => {
        if (resultMap[item]) {
            resultMap[item] += 1;
        } else {
            resultMap[item] = 1;
        }
    })
    let i = 0;
    for (let x in resultMap) {
        if (resultMap[x] === 1) {
            console.log({resultMap, x})
            return i;
        }
        i += resultMap[x];
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"))