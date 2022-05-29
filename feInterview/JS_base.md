## 01：JS数据类型

### 1. JS原始数据类型有哪些？引用数据类型有哪些？
JS 中，存在着 7 种原始类型，分别是：<br>
`boolean` `null` `undefined` `number` `string` `bigint` `symbol`

引用数据类型 6 种:
对象Object（ `普通对象-Object`，`数组对象-Array`，`正则对象-RegExp`，`日期对象-Date`，`数学函数-Math`，`函数对象-Function`）

### 2. null是对象吗？
JS 的最初版本中，使用 32 位系统，为了性能考虑使用低位存储了变量的类型信息，检测时 `000` 开头代表是对象，然而 `null` 表示为全零，所以将它错误的判断为 `object`。

### 3. 判断数据类型

基本类型：typeOf
判断类型：Object.prototype.toString.call(xx)

```js
Object.prototype.toString.call({a: 1});
'[object Object]'
Object.prototype.toString.call(2323);
'[object Number]'
Object.prototype.toString.call('asdasd');
'[object String]'
```

## 02：讲讲`symbol`类型

> 概念：ES6 引入了新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。

### 用法

* 不能用 `new命令`，它是原始类型，不是对象
* 可以接收一个字符串作为参数

```js
let sy = Symbol("lkt");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"

// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("lkt");
sy === sy1;       // false
```


## 03：谈谈对闭包的理解？
### 1. 什么是闭包？
红宝书上的定义：`闭包是有权访问另外一个函数作用域中的变量的函数`。

MDN文档定义：`闭包是指那些能访问自由变量的函数`。

综上：
* 1. 闭包是一个函数
* 2. 闭包可以访问另外一个函数作用域中的变量（自由变量）

> （自由变量，指在函数中使用的，但既不是函数参数arguments也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）


### 2. 闭包产生的原因？

ES5存在两种作用域：全局作用域、函数作用域

> 访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链

每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。

```js
// f1的作用域指向：有全局作用域(window)和它本身
// f2的作用域指向：全局作用域(window)、f1和它本身

// 作用域是从最底层向上找，直到找到全局作用域window为止，如果全局还没有的话会报错
var a = 1;
function f1() {
  var a = 2
  function f2() {
    var a = 3;
    console.log(a);//3
  }
}
```

闭包产生的本质：`当前环境中存在指向父级作用域的引用`

### 3. 用途

- 可以读取函数内部的变量延长作用域，这些变量的值始终保持在内存中
- import ，模块化实际产生了一个闭包
- react 事件函数，return出一个组件


## 04: 异步

![image.png](https://s2.loli.net/2021/12/13/S5mL8Iqi9hsBQDJ.png)

### 1. 同步代码运行背景？
通常程序都是`顺序执行`，如果一个函数依赖于另一个函数的结果，它只能等待那个函数结束才能继续执行。
从用户的角度来说，整个程序才算运行完毕。

### 2. 代码阻塞

浏览器里面的一个Web应用进行`密集运算还没有把控制权返回给浏览器的时候`，整个浏览器就像冻僵了一样，这叫做`阻塞`。

这时候浏览器无法继续处理用户的输入并执行其他任务，直到web应用交回处理器的控制。

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

> 你会注意到，直到日期的运算结束，最后一个日期在console上显示出来，段落才会出现在网页上。代码按照源代码的顺序执行，`只有前面的代码结束运行，后面的代码才会执行。`


为什么是这样? 答案是：JavaScript一般来说是单线程的（single threaded）。

此时这个复杂计算占用主线程资源。


### 3. 线程
一个线程是一个基本的处理过程，程序用它来完成任务。每个线程一次只能执行一个任务:

> Task A --> Task B --> Task C

只有前面的结束了，后面的才能开始。

现在的计算机大都有多个内核（core），因此可以同时执行多个任务。支持多线程的编程语言可以使用计算机的多个内核，同时完成多个任务:

> Thread 1: Task A --> Task B
>
> Thread 2: Task C --> Task D


### 4. JavaScript 是单线程

JavaScript 传统上是单线程的。即使有多个内核，也只能在单一线程上运行多个任务，此线程称为主线程（main thread）。

JavaScript获得了一些工具来帮助解决这种问题。通过 Web workers 可以把一些任务交给一个名为worker的单独的线程，这样就可以同时运行多个JavaScript代码块。一般`用一个worker来运行一个耗时的任务`，主线程就可以处理用户的交互（避免了阻塞）。

>Main thread: Task A --> Task C
>
> Worker thread: Expensive task B

### 5. 异步代码

我们看下面的场景：比如说Task A 正在从服务器上获取一个图片之类的资源，Task B 准备在图片上加一个滤镜。如果开始运行Task A 后立即尝试运行Task B，你将会得到一个错误，因为图像还没有获取到。

> Main thread: Task A --> Task B --> |Task D|
>
> Worker thread: Task C -----------> |      |

在这种情况下，假设Task D 要同时使用 Task B 和Task C的结果，如果我们能保证这两个结果同时提供，程序可能正常运行，但是这不太可能。如果Task D 尝试在其中一个结果尚未可用的情况下就运行，程序就会抛出一个错误。


为了解决这些问题，浏览器允许我们异步运行某些操作。像Promises 这样的功能就允许让一些操作运行 (比如：从服务器上获取图片)，然后等待直到结果返回，再运行其他的操作。

> Main thread: `Task A                   Task B`
>
>  Promise:      `|__async operation__|`

由于操作发生在其他地方，因此在处理异步操作的时候，主线程不会被阻塞。

### 6. 总结

为了让程序在一个时间内做更多的事情。当使用更新更强大的API时，更多的情况使用异步编程是唯一的途径。

最基本的形式中，JavaScript是一种`同步的、阻塞的、单线程`的语言，在这种语言中，一次只能执行一个操作。但web浏览器定义了函数和API，允许我们当某些事件发生时不是按照同步方式，而是`异步地调用函数`(比如，`时间的推移，用户通过鼠标的交互，或者获取网络数据`)。这意味着您的代码可以同时做几件事情，而不需要停止或阻塞主线程。

异步还是同步执行代码，取决于我们要做什么。

* 有时候希望事情能够立即加载并发生。例如，当将一些用户定义的样式应用到一个页面时，您希望这些样式能够尽快被应用。

* 但是，如果我们正在运行一个需要时间的操作，比如查询数据库并使用结果填充模板，那么最好将该操作从主线程中移开使用异步完成任*务。


## 05: JavaScript: 超时和间隔执行

### 1. 概念


* setTimeout()
  * 在指定的时间后执行一段代码.
* setInterval()
  *  以固定的时间间隔，重复运行一段代码.
* requestAnimationFrame()
  * setInterval()的现代版本;在浏览器下一次重新绘制显示之前执行指定的代码块，从而允许动画在适当的帧率下运行，而不管它在什么环境中运行.

### 2.



## 06: Promise的理解

<https://juejin.cn/post/7064389512729722910>

### 1. 概念

> Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

### 2. 状态

promise对象仅有三种状态

- pending（进行中）
- fulfilled（已成功）
- rejected（已失败）

### 3. 特点

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态改变（从pending变为fulfilled和从pending变为rejected），就不会再变，任何时候都可以得到这个结果。


### 4. Promise 封装请求url

```js
// 封装请求函数

const request = (url, params) => {
  return new Promise((resolve, reject) => {
    // ...do something
  })
}

// 使用时
const handleLogin = () => {
  request(
    '/basic/login',
    {
      usename: 'sunshine',
      password: '123456'
    }
  ).then(res => {
    // success do something
  }).catch(err => {
    // fail do something
  })
}
```


## 07: async与await


### 封装请求url

`Promise`的出现解决了很多问题，但是如果请求多了且有顺序要求的话，难免又会出现`嵌套`的问题，可读性较差，比如：

```js
const handleLogin = () => {
  request(
    '/basic/login',
    {
      usename: 'sunshine',
      password: '123456'
    }
  ).then(res => {
    // 登录成功后获取用户信息
    request(
      '/basic/getuserinfo',
      res.id
    ).then(info => {
      this.userInfo = info
    }).catch()
  }).catch(err => {
    // fail do something
  })
```

```js
const handleLogin = async () => {
  const res = await request('/basic/login', {
    usename: 'sunshine',
    password: '123456'
  })
  const info = await request('/basic/getuserinfo', {
    id: res.id
  })
  this.userInfo = info
}
```

### await-to-js

Promise有catch这个错误回调来保证请求错误后该做什么操作，但是async/await该如何捕获错误呢

有一个库await-to-js已经帮我们做了这件事，我们可以看看它是怎么做的，它的源码只有短短十几行，我们应该读读它的源码，学学它的思想

```js
/**
 * @param { Promise } 传进去的请求函数
 * @param { Object= } errorExt - 拓展错误对象
 * @return { Promise } 返回一个Promise
 */
export function to(
  promise,
  errorExt
) {
  return promise
    .then(data => [null, data])
    .catch(err => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }

      return [err, undefined]
    })
}

export default to

```

### 使用方式

```js

const handleLogin = async () => {
  const [resErr, res] = await to(request('/basic/login', {
    usename: 'sunshine',
    password: '123456'
  }))
  if (resErr) {
    // fail do somthing
    return
  }
  const [userErr, info] = await to(request('/basic/getuserinfo', {
    id: res.id
  }))
  if (userErr) {
    // fail do somthing
    return
  }
  this.userInfo = info
}

```

## 08: genearte


## 09: JS内置对象键值对

### 1. Set

> 概念：Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。

has、add 时间复杂度：O(1)
```js
var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};
```

### 2. Map


## 10：原型链

### 1. 概念

JavaScript 常被描述为一种基于原型的语言——每个对象拥有一个原型对象 `prototype`。

* prototype: 显式原型
* `__proto__`: 隐式原型

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

* 原型链本质是链表（链表本质通过.next相互连接，原型链通过`__proto__`连接）
* 原型链上节点是各种原型对象，比如：
  * Fuction.prototype、 Object.prototype ...
* 实例对象（object）都有一个私有属性（ `__proto__` ）指向它的原型对象（`prototype`）
![](https://raw.githubusercontent.com/Nonentityboy/PicGoToGitHub/study_note_blog/20220502192239.png)

> 如果 A 验证原型链能找到B.prototype，那么 A instanceof B为 true。


```js
const obj = {};
const func = () => {};
const arr = [];

obj.__proto__ === Object.prototype // true
obj instanceof Object   // true

func.__proto__ === Fuction.prototype // true
func.__proto__.__proto__ === Object.prototype // true
func instanceof Fuction   // true
func instanceof Object   // true

arr.__proto__ === Array.prototype // true
arr.__proto__.__proto__ === Object.prototype // true
arr instanceof Array   // true
arr instanceof Object   // true
```

> 如果 A 对象没找到 x 属性，那么会沿着原型链找 x 属性。

```js
const obj = {};
Object.prototype.x = 'x';
// obj.x => x
```


### 2. instanceof 原理与实现


instanceof 实现：
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


![](https://raw.githubusercontent.com/Nonentityboy/PicGoToGitHub/study_note_blog/20220502202437.png)

### 3. 箭头函数

箭头函数不可以使用new实例化，这是因为箭头函数没有prototype也没有自己的this指向并且不可以使用arguments。

new操作干的事情：
1. 新生成一个对象
2. 链接到原型
3. 绑定this
4. 返回新对象

```js
function create() {
  // 创建一个空的对象
  let obj = new Object()
  // 获得构造函数
  let Con = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}
```

## 11：event loop

<https://zhuanlan.zhihu.com/p/33058983>

<https://juejin.cn/post/6844903657264136200#heading-3>

### 前提

JS是非阻塞的单线程语言，JS 最初为了和`浏览器交互`而产生。

> 若 JS 是门多线程语言的话，在多个线程处理DOM就可能会有问题。（例如一个线程增加节点，另一个线程删除节点。）

JS 在执行过程中会产生执行环境，这些环境会被顺序的加入到执行栈，遇到异步的代码，会被挂起并加入到宏任务队列。

> 注意：微任务`先进先出，队列结构`。只有当await语句执行完毕之后，才会把await语句后面的全部代码加入到微任务列表中，记住，是加入`微任务列表`，且按照队列结构执行完成。

### 概念

> JavaScript的执行顺序机制。

> 事件循环的基本规则就是，执行完一个宏任务，再执行微任务队列中的所有微任务，再执行下一个宏任务...如此往复。
>
> 因此一个事件循环可以视为一个`宏任务+所有微任务`，另外也可以把执行一个宏任务的阶段，或着执行所有微任务的阶段，称作一个 tick，由此可见一个事件循环由两个 tick组成。无论是对于Node中的 `process.nextTick`还是 Vue中的 `$.nextTick`，理解何为 tick都是很有帮助的。

### 任务类型

微任务（microtask）：process.nextTick(Node) 、Promise.then/catch 、Object.observe(异步地监视一个对象的修改)、MutationObserver(监听当前DOM)

宏任务（macrotask）：script ， setTimeout ，setInterval ，setImmediate(Node) ，I/O ，UI rendering, promise声明

### 执行顺序

1. 先执行当前同步代码，属于宏任务。
2. 遇到setTimeout等，塞给宏任务队列。（`下一轮宏任务执行`）
3. 查询当前微任务队列，处理微任务，处理完成，渲染UI。
4. 结束本次宏任务，（执行下一轮宏任务）。

## 12：Node 中的 Event loop

<https://yuchengkai.cn/docs/frontend/browser.html#poll>

> Node也是单线程，但是在处理Event Loop上与浏览器稍微有些不同，Node新增了两个方法可以用来使用：微任务的process.nextTick以及宏任务的setImmediate。

```JS
setTimeout(() => {
    console.log('timer1')

    Promise.resolve().then(function () {
        console.log('promise1')
    })
}, 0);

setTimeout(() => {
    console.log('timer2')

    Promise.resolve().then(function () {
        console.log('promise2')
    })
}, 0);
```

### Node事件循环

Node的架构和浏览器实现事件循环的方式也大相径庭。Node的事件循环中有六个阶段，每个阶段中都有一个宏队列，总共只有一个微队列和一个 nextTick队列。

* Timer: SetTimeout和 SetInterval的回调放进该阶段的任务队列。
* pending callback: 执行一些系统操作的回调，例如TCP的错误。
* idle, prepare: 处理一些内部调用。
* poll: 大部分其他回调会被仿佛该阶段的任务队列
* check: SetImmediate的回调放进该阶段的任务队列。
* close callback: 一些结束时的回调，例如 Socket.on("close")

> 重点关注三个阶段，Timer、poll、check。

> 低版本（v11.0以前）的Node表现的行为和浏览器环境有很大的不同，是因为低版本下的Node在执行完`一个阶段的所有宏任务再执行微任务`；而高版本的Node表现和浏览器一致，即`执行完一个宏任务再执行微任务`。

```JS
// 低版本：2134
// 高版本：2143
setImmediate(function(){
    console.log(1);
    process.nextTick(function(){
        console.log(4)
    })
})
process.nextTick(function(){
    console.log(2)
    setImmediate(function(){
        console.log(3);
    })
})
```

`setImmediate`为一次Event Loop执行完毕后调用（一次宏任务、微任务结束。第二次宏任务队列调用。check阶段）

### Node 中的 nextTick

> `process.nextTick`是Node独有的一个方法，顾名思义我们可以知道这个方法的目的是让某个任务在下一个 tick的最开始执行。比如，当我们处在一个宏任务阶段调用 process.nextTick，那么会在当前`宏任务执行结束后`，在后续的`微任务阶段执行前`执行 nextTick接受的回调函数。

> Node 中专门维护了一个 `nextTick 队列`, 每当我们执行完一个 tick(也就是执行完当前宏任务后)，就会执行 nextTick队列中的所有任务（微任务队列最前面加了个`nextTick队列`）。

```js
setTimeout(() => {
    console.log(1)
    process.nextTick(() => {
        console.log(2)
    })
}, 0)

new Promise((resolve) => resolve())
.then(() => {
    console.log(3)
    process.nextTick(() => {
        console.log(4)
    })
})

process.nextTick(() => {
    console.log(5)
    process.nextTick(() => {
        console.log(6)
    })
    setImmediate(function () {
        console.log(7)
    })
})

process.nextTick(function () {
    console.log(8)
    process.nextTick(() => {
        console.log(9)
    })
});
```

### async/await函数

<https://juejin.cn/post/6844903657264136200#heading-6>

```JS
setTimeout(_ => console.log(4))

async function main() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

main()

console.log(2)
```

如上代码:

* async函数在await之前的代码都是同步执行的，可以理解为await之前的代码属于new Promise时传入的代码
* await之后的所有代码都是在Promise.then中的回调

## 13: this

### 常见规则

`this`记住几个规则就可以了。

1. 在函数里面调用this，指向的是window
2. 作为对象方法调用，this指向的当前对象
```js
function foo() {
	console.log(this.a)
}
var a = 1
foo() // 1

var obj = {
	a: 2,
  foo: foo,
  foo2: () => {
    console.log(this.a)
  }
}

obj.foo2() // 1 箭头函数当前执行作用域在window
obj.foo() // 2 普通函数当前作用域在调用时这个对象上
```

3. new 优先级最高，只会绑定到c上，不会被任何方式修改`this`指向
```js
var c = new foo()
c.a = 3
console.log(c.a)
```

4. call、apply、bind 改变 this，这个优先级仅次于 new

### 绑定顺序

new => call、apply、bind => 对象方法调用 => 函数直接调用

### 箭头函数

```js
function a() {
    return () => {
        return () => {
        	console.log(this)
        }
    }
}
console.log(a()()()) // Window
```

- 箭头函数没有 `this`，取决于他外面第一个不是箭头函数的`this`
- this 一旦绑定上下文，就不会被代码改变

## 14: JavaScript 高阶函数

### 应用
高阶函数可以接收函数作为参数，同时也可以返回一个新的函数。


> 高阶函数之所以高阶，是因为高阶函数的参数和返回值对象可以是函数，这超越了普通函数处理的数据类型，例如字符串（strings）、数字（numbers）、布尔值（booleans）等。

JavaScript 中，函数的应用场景很丰富：

- 作为变量存储
- 在数组中使用
- 作为对象属性（即方法）
- 作为参数传递
- 作为其他函数的返回值

> 理解高阶函数的关键在于，函数即数据。

### 数据是函数运作的基本

```js
// 字符串
sayHi = (name) => `Hi, ${name}!`;
result = sayHi('User');
console.log(result); // 'Hi, User!'

// 数字（Numbers）
double = (x) => x * 2;
result = double(4);
console.log(result); // 8

// 布尔值（Booleans）
getClearance = (allowed) => allowed ?  'Access granted' :  'Access denied';
result1 = getClearance(true);
result2 = getClearance(false);
console.log(result1); // 'Access granted'
console.log(result2); // 'Access denied'

// 对象（Objects）
getFirstName = (obj) => obj.firstName;
result = getFirstName({
	firstName: 'Yazeed'
});
console.log(result); // 'Yazeed'

// 数组（Arrays）
len = (array) => array.length;
result = len([1, 2, 3]);
console.log(result); // 3

// 函数作为参数
isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);
console.log(result); // [2, 4]
```

函数作为返回值：

```js
const add = (x) => (y) => x + y;

result = add(5)(10);
add5 = add(5);
result = add5(10);

console.log({ add5, result });
// { add5: [Function (anonymous)], result: 15 }

const emptyFunc = () => {};

const handleSquareRes = (func) => {
  return func(1);
}

// 函数作为参数，实现函数结果的阶乘
const emptyFunc = (e) => () => e;

const handleSquareRes = (func) => {
    return func() * func();
}

console.log(handleSquareRes(emptyFunc(13223)));
```
