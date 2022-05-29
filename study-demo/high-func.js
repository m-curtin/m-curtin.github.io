
// const add = (x) => (y) => x + y;

// result = add(5)(10);
// add5 = add(5);
// result = add5(10);

// console.log({ add5, result })
// { add5: [Function (anonymous)], result: 15 }

const emptyFunc = (e) => () => e;

const handleSquareRes = (func) => {
    return func() * func();
}

console.log(handleSquareRes(emptyFunc(13223)));
