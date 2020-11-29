## 最后一个单词的长度


给定一个仅包含大小写字母和空格 `' '` 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格字符的 `最大子字符串`。

示例:

```
输入: "Hello World"
输出: 5
```

### 解法一：正则匹配字符串

* 利用正则把空格全部替换为一个空格，再用`split`方法分隔成为数组。
* 考虑边界条件，字符串结尾也可能有空格。
```js
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    if(!s) return 0;
    let newArr = s.replace(/\s+/g,' ').split(' ');
    return newArr[newArr.length - 1].length || newArr[newArr.length - 2].length;
};
```

### 解法二：循环遍历

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s) return 0;
    let end = s.length - 1;
    while(end >= 0 && s[end] == ' '){
        end--;
    }
    let start = end;
    while(s[start] != ' ' && start >= 0) {
        start--;
    }
    return end - start;
};
```
