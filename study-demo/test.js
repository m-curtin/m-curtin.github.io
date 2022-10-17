/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    const strArr = S.split('');
    const map = {};
    for(let i = 0; i < strArr.length; i++) {
        if(map[strArr[i]] === undefined) {
            map[strArr[i]] = 1;
        } else {
            map[strArr[i]]+=1;
        }
    }
    let newStr = '';
    for(let key in map) {
        newStr = newStr.concat(`${key}${map[key]}`)
    }

    console.log({map, newStr})

    if (S.length > newStr.length) {
        return newStr;
    } else {
        return S;
    }

};

// a2b1c5a3


console.log(compressString('aabcccccaaa'))