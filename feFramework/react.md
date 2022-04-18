# React

## 定义

React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作`组件`。

## 编程概念

### 声明式编程

编写方式描述了应该做什么，让编译器去决定。例如：html、sql。

```js
// HTML
<div>
  <p>Declarative Programming</p>
</div>
```

```sql
select * from studens where firstName = 'declarative';
```

### 命令式编程
与声明式编程概念相反。需要有完整的流程步骤。

```js
const numbers = [1,2,3,4,5];

// 声明式
const doubleWithDec = numbers.map(number => number * 2);

console.log(doubleWithDec)

// 命令式
const doubleWithImp = [];
for(let i = 0; i < numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble)
}
console.log(doubleWithImp)

```

### 函数式编程

`函数式编程`是`声明式编程`的一部分。JS中的函数是第一类公民，这意味着函数是数据，像保存变量一样在应用程序中保存、检索和传递这些函数。
函数式编程有些核心的概念，如下：

* 不可变性(Immutability)
* 纯函数(Pure Functions)
* 数据转换(Data Transformations)
* 高阶函数 (Higher-Order Functions)
* 递归
* 组合


## React 基础

### JSX 概念
JSX是JavaScript的一种语法扩展，JSX可以生成React元素。

```js
const element = <h1>hello, world!</h1>
```

`Babel`会把JSX转译为React.createElement()函数调用，下面代码是一样的。

```js
const element = (
  <h1 className="container">
    Hello, world!
  </h1>
);
// 上下等同
const element = React.createElement(
  'h1',
  {className: 'container'},
  'Hello, world!'
);
```

<b>这也就是为什么每次要引入 React 库，因为使用 JSX 就需要 React 库。</b>

React.createElement()会创建这样的对象，也叫做React元素，其实是虚拟DOM。

```js
// 简化过的结构
const element = {
    type: 'h1',
    props: {
        className: 'container',
        children: 'Hello, world!'
    }
};
```

### 组件

组件名一定要大写， JSX 中小写的会当成 html 标签。

* <todo /> 编译为 React.createElement('todo')
* <Todo /> 编译为 React.createElement(Todo)

### 函数组件与class组件

> 函数组件没有内部的状态，也没有生命周期。class组件有。

```js
// 函数组件
function Hello(props) {
  return (
    <div>
      // 函数组件使用props
        hello world {props.name}
    </div>
  )
}
```

### 生命周期

#### 生命周期(16.3版本)

[![DYqHZd.png](https://s3.ax1x.com/2020/11/24/DYqHZd.png)]()


### setState

不要直接改State

```js
// Wrong
// 此代码不会重新渲染组件
this.state.comment = 'Hello';
```

应该用setState()

```js
// Correct
this.setState({comment: 'hello'})
```

### 条件渲染

#### &&运算符

```js
function App(props) {
  return (
    <div>
      {
        props.count > 0 && <span>hello world</span>
      }
    </div>
  )
}
```

#### 三目运算符
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

#### 阻止组件渲染

```js
function App(props) {
    if(props.flag) return null
    ...
}
```
#### 列表渲染
```js
{
    props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.id}/>
    })
}
```


### 受控组件与非受控组件


### Refs

### 组件通信


## Fiber 架构

### 为什么需要 Fiber

* 浏览器是多线程，包括JS引擎线程、GUI渲染线程、定时器线程、事件线程等工作线程。
* JS引擎线程和GUI渲染线程互斥，大多数的浏览器页面的刷新频率取决于显示器的刷新频率，即每16.6毫秒就会通过GUI渲染引擎刷新一次
* JS引擎线程一次性执行了一个长时间的同步任务，可能出现掉帧影响用户体验的情况


### 旧版本React不足之处

* 庞大组件的创建和更新都可能需要较长时间，组件的创建或更新可能都需要较长时间

### Fiber设计思路

* 将耗时时间长的同步任务分片成多个任务单元
* 执行完一个任务单元后可保存当前状态
* 切换到GUI渲染线程刷新页面
* 再回到主线程并从上个断电继续执行任务

## diff策略

> React中 Virtual DOM 与 diff 的完美结合，其高效的diff算法，让开发者无需关心 Virtual DOM 背后的工作原理， React diff帮我们计算出 Virtual DOM 中真正变化的部分，并只针对该部分进行实际 DOM 操作，而非渲染整个页面。从而保证每次更新页面的高效渲染。

### 传统diff 算法

* 通过循环递归对节点进行依次对比，时间复杂度高达O(n^3)，n为树中节点总数
* 1000个节点，那就是10亿次比较


### React diff策略

* 时间复杂度 O(n^3) 转换成 O(n) 复杂度
* Web UI 中 DOM 节点跨层级的移动操作少，忽略不计
* 拥有相同类的两个组件回生成相似的树形结构，拥有不同类别的两个组件会生成不同的树形结构
* 同一层级子节点通过唯一id区分

### 总结

- React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

- React 通过分层求异的策略，对 tree diff 进行算法优化；

- React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；

- React 通过设置唯一key的策略，对 element diff 进行算法优化；`（不设置key可能不更新）`

- 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

- 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。


## Hook

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

```

### 为什么有 hook

> Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识。


* 组件之间复用状态逻辑很难
  * React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）
  * React 需要为共享状态逻辑提供更好的原生途径

* 复杂组件变得难以理解
  * 我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。
  * 组件常常在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。


在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。

为了解决这个问题，`Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）`，而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。


### useState

[code.io demo](https://codepen.io/Nonentityboy/pen/ExvJWWV)
```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

useState的参数也可以是一个函数。

```js
const [state, setState] = useState(() => {
    return 0
});
```

### useEffect

```js
import React, {
    useState,
    useEffect,
} from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

```js
useEffect(() => {}, []) // 只在挂载时执行
useEffect(() => {}, [count]) // 只在挂载和count改变时执行
useEffect(() => {}) // 在挂载和数据更新时执行
```


`useEffect`可以返回一个函数来清除副作用

```js
useEffect(() => {
    // 运行副作用
    ChatAPI.subscribe()
    // 清除副作用
    return () => {
        ChatAPI.unsubscribe()
    }
})
```


组件挂载时，运行副作用（effect）；组件更新时，先清除上一个effect，再运行下一个effect；组件卸载时，清除最后一个effect。

```js
function FriendStatus(props) {
  // ...
  useEffect(() => {
    // ...
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```


```js
// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect
```

### useRef

在函数组件中引入`ref`

```js
import React, { useRef } from 'react'

function App(props) {
    let refs = useRef(null)
    return (
    	<input ref={refs}>
    )
}
```

### useMemo

类似计算属性，根据依赖的变量缓存计算的结果。

```js
const revertMsg = useMemo(() => msg.split('').reverse().join(''), [msg])

```

### useCallback

