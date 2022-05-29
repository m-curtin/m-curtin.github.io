# CSS

## 水平居中

对于行内元素: text-align: center;

对于确定宽度的块级元素：
- width和margin实现。margin: 0 auto;
- 绝对定位和margin-left: -width/2, 前提是父元素position: relative

对于宽度未知的块级元素
- table标签配合margin左右auto实现水平居中。使用table标签（或直接将块级元素设值为display:table），再通过给该标签添加左右margin为auto。
- inline-block实现水平居中方法。display：inline-block和text-align:center实现水平居中。
- 绝对定位+transform，translateX可以移动本身元素的50%。
- flex布局使用justify-content:center

## 垂直居中
1. 利用line-height实现居中，这种方法适合纯文字类
2. 通过设置父容器相对定位，子级设置绝对定位，标签通过margin实现自适应居中
3. 弹性布局flex:父级设置display: flex; 子级设置margin为auto实现自适应居中
4. 父级设置相对定位，子级设置绝对定位，并且通过位移transform实现
5. table布局，父级通过转换成表格形式，然后子级设置vertical-align实现。（需要注意的是：vertical-align: middle使用的前提条件是内联元素以及display值为table-cell的元素）。
6. flex方案: align-items: center;



## flex 布局

概念：布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持。

```css
.flex-container {
    display: flex;
    flex-direction: row;
    /* 主轴的方向，默认row，从左往右 */
    flex-wrap: nowrap;
    /* 是否换行，默认不换行*/
    justify-content: center;
    /* 主轴上的布局，默认flex-start */
    align-items: center;
    /* 交叉轴上的布局，默认值flex-start */
    align-content: center;
    /* 多条轴线的布局 */
}

.flex-items {
    order: 2;
    /* 项目的order， 越大的越后面*/
    flex-grow: 1;
    /* 扩张比例，默认0，不占剩余空间 */
    flex-shrink: 1;
    /* 缩小比例，默认1，自动缩小*/
    flex-basis: 200px;
    /* 主轴上的宽度 */
    flex: 1 0 200px;
    /* 上面三条的缩写 */
    align-self: flex-end;
    /* 修改项目的交叉轴布局*/

    /* flex: 1; === flex: 1 1 0; */
}
```

## 选择器
1. 标签选择器，如div
2. ID选择器，如#root
3. class选择器，如.container
4. 子代选择器，父子关系，如div > p
5. 后代选择器 ，可以是爷爷和孙子的关系，如div p
6. 相邻兄弟选择器，如div + p， 选择紧邻着div后面的p
7. 属性选择器，如[type=input]
8. 伪类选择器，如:hover、:first-child、:nth-child()、:first-of-type、
9. 通配符选择器，*

> 优先级：!important > inline selector > id selector > class selector > tag selector > * > 浏览器默认样式 > 继承样式

常见的继承样式如font-size、color、visibility等

## display

### block
如`div`、`h1~h6`、`p`、`header`等

- 1. 元素独占一行，默认根据父元素计算出元素的宽度
- 2. 可以手动设置元素`width`和`height`

### inline
如`a`、`span`、`img`等

- 1. 元素不独占一行
- 2. 不可以手动设置元素`width`和`height`
- 3. img有点特殊，虽然它的`display`为`inline`，但它的表现更贴近`inline-block`，比如它可以手动设置`width`和`height`属性

### inline-block
如input等，兼具了block和inline的特性

- 1. 元素不独占一行
- 2. 但可以手动设置元素width和height

## 穿透点击

pointer-events: none;

## 浮动布局的优点？有什么缺点？清除浮动有哪些方式？

> 浮动布局简介:当元素浮动以后可以向左或向右移动，直到它的外边缘碰到包含它的框或者另外一个浮动元素的边框为止。元素浮动以后会脱离正常的文档流，所以文档的普通流中的框就变现的好像浮动元素不存在一样。

### 优点

这样做的优点就是在图文混排的时候可以很好的使文字环绕在图片周围。另外当元素浮动了起来之后，它有着块级元素的一些性质例如可以设置宽高等，但它与inline-block还是有一些区别的，第一个就是关于横向排序的时候，float可以设置方向而inline-block方向是固定的；还有一个就是inline-block在使用时有时会有空白间隙的问题。

### 缺点

最明显的缺点就是浮动元素一旦脱离了文档流，就无法撑起父元素，会造成父级元素的高度塌陷。

### 清除浮动的方式

1. 添加额外标签

```js
<div class="parent">
    //添加额外标签并且添加clear属性
    <div style="clear:both"></div>
    //也可以加一个br标签
</div>
```

2. 建立伪类选择器清除浮动（推荐）

```js
//在css中添加:after伪元素
.parent:after{
    /* 设置添加子元素的内容是空 */
    content: '';
    /* 设置添加子元素为块级元素 */
    display: block;
    /* 设置添加的子元素的高度0 */
    height: 0;
    /* 设置添加子元素看不见 */
    visibility: hidden;
    /* 设置clear：both */
    clear: both;
}
<div class="parent">
    <div class="f"></div>
</div>
```

## 两个元素使用 display:inline-block会产生什么问题？解决方法？

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      .container {
        width: 800px;
        height: 200px;
      }

      .left {
        font-size: 14px;
        background: red;
        display: inline-block;
        width: 100px;
        height: 100px;
      }

      .right {
        font-size: 14px;
        background: blue;
        display: inline-block;
        width: 100px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="left">
        左
      </div>
      <div class="right">
        右
      </div>
    </div>
  </body>
</html>
```

![](https://sanyuan0704.top/007/example.png)

### 产生空白的原因

元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据CSS中white-space属性的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。

### 解决办法

1. 将子元素标签的结束符和下一个标签的开始符写在同一行或把所有子标签写在同一行
```html
<div class="container">
  <div class="left">
      左
  </div><div class="right">
      右
  </div>
</div>
```
2. 父元素中设置font-size: 0，在子元素上重置正确的font-size

```css
.container {
  width:800px;
  height:200px;
  font-size: 0;
}
```

## 什么是BFC？什么条件下会触发？应用场景有哪些？

### 概念

> W3C对BFC的定义如下： 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为"visiable"的块级盒子，都会为他们的内容创建新的BFC（Block Fromatting Context， 即块级格式上下文）。

### 触发条件
一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可： 下列方式会创建块格式化上下文：

- 根元素()
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素 -弹性元素（display为 flex 或 inline-flex元素的直接子元素）
- 网格元素（display为 grid 或 inline-grid 元素的直接子元素） 等等。

### BFC渲染规则
- （1）BFC垂直方向边距重叠
- （2）BFC的区域不会与浮动元素的box重叠
- （3）BFC是一个独立的容器，外面的元素不会影响里面的元素
- （4）计算BFC高度的时候浮动元素也会参与计算

### 应用场景
1. 防止浮动导致父元素高度塌陷
现有如下页面代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      .container {
        border: 10px solid red;
      }
      .inner {
        background: #08BDEB;
        height: 100px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="inner"></div>
    </div>
  </body>
</html>
```

![](https://sanyuan0704.top/012/1.jpg)

接下来将inner元素设为浮动:

```css
.inner {
    float: left;
    background: #08BDEB;
    height: 100px;
    width: 100px;
}
```
![](https://sanyuan0704.top/012/2.jpg)

但如果我们对父元素设置BFC后, 这样的问题就解决了:

```css
.container {
    border: 10px solid red;
    overflow: hidden;
}
```

同时这也是清除浮动的一种方式。

2. 避免外边距折叠， 两个块同一个BFC会造成外边距折叠，但如果对这两个块分别设置BFC，那么边距重叠的问题就不存在了。


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .container {
      background-color: green;
      overflow: hidden;
    }

    .inner {
      background-color: lightblue;
      margin: 10px 0;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="inner">1</div>
    <div class="inner">2</div>
    <div class="inner">3</div>
  </div>
</body>

</html>
```

![](https://sanyuan0704.top/012/3.jpg)

此时三个元素的上下间隔都是10px, 因为三个元素同属于一个BFC。 现在我们做如下操作:

```js
<div class="container">
    <div class="inner">1</div>
    <div class="bfc">
        <div class="inner">2</div>
    </div>
    <div class="inner">3</div>
</div>
```

style增加:

```css
.bfc{
    overflow: hidden;
}
```

效果如下:

![](https://sanyuan0704.top/012/4.jpg)

可以明显地看到间隔变大了，而且是原来的两倍，符合预期。




## 盒模型

盒模型指的是元素由它的`content`、`padding`、`border`、`margin`几个部分组成。

- 除此之外，元素的`box-sizing`属性默认为`content-box`，这意味此时当我们设置元素的width，实际上是在设置content的长度；

- 我们可以把`box-sizing`修改为`border-box`，那么此时元素的`width`表示`content + padding + border`的长度


## transition

```css
.app {
    transition-property: width;
    transition-duration: 3s;
    transition-timing-function: ease-in;
    transition-delay: 1s;
}
```

## animation

```css
@keyframes anime {
    from {
        background: pink;
    }

    to {
        background: yellow;
    }
}

.app {
    <!-- 动画名 -->
    animation-name: anime;
    <!-- 动画持续时间 -->
    animation-duration: 3s;
    <!-- 动画曲线-->
    animation-timing-function: ease-in-out;
    <!-- 延迟 -->
    animation-delay: 1s;
    <!-- 动画播放次数-->
    animation-iteration-count: 2;
    <!-- 动画是否在下一周期逆向地播放-->
    animation-direction: alternate;
    <!-- 动画是在运行还是暂停-->
    animation-play-state: paused;
    <!-- 动画的结束状态-->
    animation-fill-mode: forwards;
}
```

