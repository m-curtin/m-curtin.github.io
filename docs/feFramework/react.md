# React

## 定义

React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

## React 基础

### JSX 概念
JSX是JavaScript的一种语法扩展，JSX可以生成React元素。

```js
const element = <h1>hello, world!</h1>
```

Babel会把JSX转译为React.createElement()函数调用，下面代码是一样的。

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

React.createElement()会创建这样的对象，也叫做React元素，其实就是虚拟DOM。

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

[![DYqHZd.png](https://s3.ax1x.com/2020/11/24/DYqHZd.png)](https://imgchr.com/i/DYqHZd)


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
        	{ props.count > 0 &&
            	<span>hello world</span>
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