
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
