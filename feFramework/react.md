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

React在V16版本推出了Fiber架构，在弄清楚什么是Fiber之前，我们应该先了解为什么需要Fiber。

- 首先，浏览器是多线程的，这些线程包括`JS引擎线程（主线程）`，以及GUI渲染线程，定时器线程，事件线程等工作线程。

- `JS引擎线程`和`GUI渲染线程`是互斥的。又因为绝大多数的浏览器页面的刷新频率取决于`显示器的刷新频率`，即每16.6毫秒就会通过GUI渲染引擎刷新一次。

- 所以，如果`JS引擎线程`一次性执行了一个长时间（大于16.6毫秒）的同步任务，就可能出现掉帧的情况，影响用户的体验。


### 旧版本React不足之处

* 庞大组件的创建和更新都可能需要较长时间，组件的创建或更新可能都需要较长时间

### Fiber设计思路

* 将耗时时间长的同步任务分片成多个任务单元
* 执行完一个任务单元后可保存当前状态
* 切换到GUI渲染线程刷新页面
* 再回到主线程并从上个断电继续执行任务
* 将原本耗时很长的同步任务分成多个耗时短的分片，从而实现了浏览器中互斥的`JS引擎线程（主线程）`与`GUI渲染线程`之间的调度
* Fiber的思路是将`原本耗时较长的同步任务`分片为多个任务单元，执行完一个任务单元后可以保存当前的状态，切换到GUI渲染线程去刷新页面，接下来再回到主线程并从上个断点继续执行任务

## 虚拟DOM

### 概念

虚拟DOM可以看做一棵模拟了DOM树的JavaScript对象树。

```JS
let element = {
    element: 'ul',
    props: {
        id: "ulist"
    },
    children: [
        {
            element: 'li',
            props: { id:"first" },
            children: ['这是第一个List元素']
        },
        {
            element: 'li',
            props: { id:"second" },
            children: ['这是第二个List元素']
        }
    ]
}
```

- 传统的 Web 开发，我们往往会把数据的变化实时地更新到用户界面中，于是每次数据的微小变动都会引起 DOM 树的重新渲染。
- 虚拟DOM的目的是将所有操作累加起来，统计计算出所有的变化后，统一更新一次DOM。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91081763231441a4affb2bc7c0b61134~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

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


### diff 算法原理

Node节点的更新，虚拟DOM会比较两棵DOM树的区别，保证最小化的DOM操作，使得执行效率得到保证。

计算两棵树的常规算法是`O(n^3)`级别，所以需要优化`深度遍历(DFS)`的算法。React diff算法的时间复杂度为O(n)。

![遍历算法](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c47307fed384e4e8a149f39fb4fe5ea~tplv-k3u1fbpfcp-zoom-1.image)

### React diff 算法

<https://juejin.cn/post/6844904165026562056#heading-3>


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

> React官网：Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识。


* 组件之间复用状态逻辑很难
  * React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）
  * React 需要为共享状态逻辑提供更好的原生途径

* 复杂组件变得难以理解
  * 我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。
  * 组件常常在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。


在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。

为了解决这个问题，`Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）`，而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。

### 解决问题

**业务发展导致组件日益庞大**，最外层的代码集中维护许多state状态（像`生命周期`内部），导致页面引入越来越多毫无关联的模块，代码的可读性大大降低，有时候因为`多个生命周期`里面有大量`不相关的逻辑`，这样杂乱的代码容易引起bug。

为了解决更深层次的问题：React 需要为共享状态逻辑提供更好的途径`hook`。

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



### useContext

通过使用`useContext`，我们能够在组件内部获取到外层`<MyContext.Provider value={value}>`传递下来的值，免去了一层一层传`props`的烦恼。

> 但需要注意的是，一旦我们组件使用了`useContext()`，那么一旦`Provider`传递的`value`地址发生了改变，就会触发我们组件的重新渲染。

## setState 方法原理

类组件中通过`this.setState`修改数据。

**合成事件**和**组件的生命周期**中`setState`是异步的；而在**原生事件**和**定时器**中`setState`是同步的。

React内部维护了一个标识：`isBatchingUpdates`。在**合成事件**和**组件的生命周期**中，该值为`true`，那么`setState`会被缓存进队列，最后才批量更新；而在**原生事件**和**定时器**中，该值为`false`，调用`setState`时会直接同步更新。


## 高阶组件

高阶组件是参数为组件，返回值为新组件的函数。



## React 16.8

> react核心思想就是，将一个页面拆成一堆独立的，可复用的组件，并且用自上而下的单向数据流的形式将这些组件串联起来。

不编写 class 的情况下使用状态(state)和其他 React 特性。 可以构建自己的 Hooks, 跨组件共享可重用的有状态逻辑。

### redux

redux参考链接：<https://juejin.cn/post/6844903846666321934#heading-7>

1. props意味着父级分发下来的属性
2. state意味着组件内部可以自行管理的状态，并且整个React没有数据向上回溯的能力，这就是react的单向数据流

> redux是的诞生是为了给 React 应用提供「可预测化的状态管理」机制。Redux会将整个应用状态(其实也就是数据)存储到到一个地方，称为store 这个store里面保存一棵状态树(state tree) 组件改变state的唯一方法是通过调用store的dispatch方法，触发一个action，这个action被对应的reducer处理，于是state完成更新组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件,其它组件可以通过订阅store中的状态(state)来刷新自己的视图

#### 使用步骤

创建reducer

可以使用单独的一个reducer,也可以将多个reducer合并为一个reducer，即：combineReducers()
action发出命令后将state放入reucer加工函数中，返回新的state,对state进行加工处理

创建action

用户是接触不到state的，只能有view触发，所以，这个action可以理解为指令，需要发出多少动作就有多少指令
action是一个对象，必须有一个叫type的参数，定义action类型

创建的store，使用createStore方法

store 可以理解为有多个加工机器的总工厂
提供subscribe，dispatch，getState这些方法。

```js
npm install redux -S // 安装

import { createStore } from 'redux' // 引入

const reducer = (state = {count: 0}, action) => {----------> ⑴
  switch (action.type){
    case 'INCREASE': return {count: state.count + 1};
    case 'DECREASE': return {count: state.count - 1};
    default: return state;
  }
}

const actions = {---------->⑵
  increase: () => ({type: 'INCREASE'}),
  decrease: () => ({type: 'DECREASE'})
}

const store = createStore(reducer);---------->⑶

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(actions.increase()) // {count: 1}
store.dispatch(actions.increase()) // {count: 2}
store.dispatch(actions.increase()) // {count: 3}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e77d7f76ad6b4602af7fe428da0730d5~tplv-k3u1fbpfcp-zoom-1.image)

### Mobx

### react-redux

把store直接集成到React应用的顶层props里面，只要各个子组件能访问到顶层props就行了

```js
<顶层组件 store={store}>
  <App />
</顶层组件>
```

Redux 官方提供的 React 绑定库。 具有高效且灵活的特性。

### React Redux 将组件区分为 容器组件 和 UI 组件

1. 前者会处理逻辑
2. 后者只负责显示和交互，内部不处理逻辑，状态完全由外部掌控

> Provider

> connect

### mapStateToProps

把state映射到props中去 ,其实也就是把`Redux中的数据映射到React中的props`中去

```js
const mapStateToProps = (state) => {
    return {
    // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        foo: state.bar
    }
}

```




## 合成事件

参考链接：
<https://segmentfault.com/a/1190000038251163>

<https://segmentfault.com/a/1190000039108951>

[react 17 移除事件池](https://zh-hans.reactjs.org/blog/2020/08/10/react-v17-rc.html)

### 概念

> 理解：React在所有原生事件上做了层接口封装。

- React 合成事件（SyntheticEvent）是 React 模拟原生 DOM 事件所有能力的一个事件对象，即`浏览器原生事件的跨浏览器包装器`。
- 根据 W3C 规范 来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。

React 中，所有事件都是合成的，不是原生 DOM 事件，但可以通过 e.nativeEvent 属性获取 DOM 事件。

```JS
const handleClick = (e) => console.log(e.nativeEvent);;
const button = <button onClick={handleClick}>Leo 按钮</button>
```

### 目的

- 浏览器兼容，实现更好的跨平台,顶层事件代理机制，能够保证冒泡一致性，可以跨浏览器执行。React 提供的合成事件用来抹平不同浏览器事件对象之间的差异，将不同平台事件模拟合成事件。
- 事件对象可能会被频繁创建和回收， React 引入`事件池`，事件池中获取或释放事件对象。即 `React 事件对象不会被释放掉`，而是存放进一个数组中，当事件触发，就从这个数组中弹出，`避免频繁地去创建和销毁(垃圾回收)`。

源码参考:
<https://github.com/facebook/react/blob/75ab53b9e1de662121e68dabb010655943d28d11/packages/events/SyntheticEvent.js#L62>

### 合成事件与原生事件区别

- 事件名称命名方式不同

```js
// 原生事件绑定方式
<button onclick="handleClick()">Leo 按钮命名</button>

// React 合成事件绑定方式
const button = <button onClick={handleClick}>Leo 按钮命名</button>

// 原生事件 事件处理函数写法
<button onclick="handleClick()">Leo 按钮命名</button>

// React 合成事件 事件处理函数写法
const button = <button onClick={handleClick}>Leo 按钮命名</button>
```

- 阻止默认行为方式不同
  - 原生事件中通过返回false 来阻止默认行为
  - react中需要使用preventDefault() 来阻止

```JS
// 原生事件阻止默认行为方式
<a href="https://www.pingan8787.com"
  onclick="console.log('Leo 阻止原生事件~'); return false"
>
  Leo 阻止原生事件
</a>

// React 事件阻止默认行为方式
const handleClick = e => {
  e.preventDefault();
  console.log('Leo 阻止原生事件~');
}
const clickElement = <a href="https://www.pingan8787.com" onClick={handleClick}>
  Leo 阻止原生事件
</a>
```

### React 事件与原生事件执行顺序

> React 中，“合成事件”会以事件委托（Event Delegation）方式绑定在组件最上层，并在组件卸载（unmount）阶段自动销毁绑定的事件。这里我们手写一个简单示例来观察 React 事件和原生事件的执行顺序。

```JS
class App extends React.Component<any, any> {
  parentRef: any;
  childRef: any;
  constructor(props: any) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }
  componentDidMount() {
    console.log("React componentDidMount！");
    this.parentRef.current?.addEventListener("click", () => {
      console.log("原生事件：父元素 DOM 事件监听！");
    });
    this.childRef.current?.addEventListener("click", () => {
      console.log("原生事件：子元素 DOM 事件监听！");
    });
    document.addEventListener("click", (e) => {
      console.log("原生事件：document DOM 事件监听！");
    });
  }
  parentClickFun = () => {
    console.log("React 事件：父元素事件监听！");
  };
  childClickFun = () => {
    console.log("React 事件：子元素事件监听！");
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <div ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </div>
      </div>
    );
  }
}
export default App;

// 原生事件：子元素 DOM 事件监听！
// 原生事件：父元素 DOM 事件监听！
// React 事件：子元素事件监听！
// React 事件：父元素事件监听！
// 原生事件：document DOM 事件监听！
```

通过上面流程，我们可以理解：

- React 所有事件都挂载在 document 对象上；
- 当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件；
- 所以会先执行原生事件，然后处理 React 事件；
- 最后真正执行 document 上挂载的事件。

![](https://segmentfault.com/img/remote/1460000038251169)

## React 的事件绑定为什么要bind this

参考链接：
<https://juejin.cn/post/6844903633067180039>
<https://segmentfault.com/a/1190000038167700>
<https://github.com/Vibing/blog/issues/13>

JSX语法实际上是createElement的语法糖

```JS
<div>Hello, { this.props.name }</div>
// 等价于
React.createElement('div', null, `Hello,${this.props.name}` )

// createElement伪代码实现
function createElement(dom, params) {
  var domObj = document.createElement(dom);
  domObj.onclick = params.onclick;
  domObj.innerHTML = params.conent;
  return domObj
}
```

- button被点击时，会由React作为中介调用回调函数，此时的`this指向丢失，就指向了window`
- bind this原理：改变原函数 this 指向，即绑定 `this`，返回原函数的拷贝

### 为什么箭头函数方式不需要bind this

- 箭头函数内没有this，默认用父级作用域的this
- 当使用new关键字时，this指向新对象，同时箭头函数中的this也被赋值为了新对象且永远不会更改指向

