## instanceof实现

```js
const newInstanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__; // 遍历原型链
    }
    return false;
};
```

## bind、apply、call 实现

