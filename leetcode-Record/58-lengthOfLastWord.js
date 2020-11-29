var lengthOfLastWord = function(s) {
    if(!s) return 0;
    let newArr = s.replace(/\s+/g,' ').split(' ');
    return newArr[newArr.length - 1].length || newArr[newArr.length - 2].length;
};

console.log(lengthOfLastWord('Hello world'));