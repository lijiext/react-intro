# React Intro
## JSX 语法
```javascript
class App extends Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    };
}
```
类似 XML 的 JavaScript，需要使用自己定义的组件，使用标签返回即可

组件名称必须为大写

## ToDo List
###  Fragment 组件
占位符，替代挂载点之下的`div`（由于 JSX 语法必须要元素被容器包裹）
### 数据绑定
1. 需要在构造器中指定数据
2. 在组件上设定监听方法
3. 使用 bind() 解决 this 作用域问题
4. 使用 setState 方法改变变量值
### Styling
1. 直接引入 css 文件 `import './style.css'`
2. 使用 className 替代 class
3. 使用 htmlFor 替代 For

## ToDo List Item 组件化
### 父子组件数据传递
- 父组件直接传递属性，子组件引用 `this.props.attribute`
- 父组件传递函数给子组件，使用 `this.function.bind(this)`
### 子组件如何操作父组件的数据
**曲线救国**，父组件传递函数给子组件

## 命令式 与 声明式 
- 命令式：直接操作 DOM
- 声明式：数据驱动，不直接操作 DOM

## React 如何与其他框架共存
React 只会管理`root`下的 DOM

## 单向数据流
子组件不能直接修改父组件的数据，read-only property

例如：同父多子，某子修改父组件数据，导致其他子组件数据同步变化

好处：便于维护、排错，提高可靠性

## React 的定位：视图层框架 View
组件的传值并不是 React 全权解决的问题，大型项目中光靠 React 解决组件间通信是不切实际的，通过与数据框架一起写作完成数据的处理过程，例如 React Flux, React Redux。

但是一般的中小型项目，使用 React 就可解决大部分问题。

## 面向测试
函数式编程给前端自动化测试带来了方便

## React Developer Tools
[控制台工具，便于调试](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-CN)

## [PropsType and Default Props](https://reactjs.org/docs/typechecking-with-proptypes.html)
Below are the validators for the basic data types.

PropTypes.any: ANY

PropTypes.bool: 布尔类型

PropTypes.number: 数字

PropTypes.string: 字符串

PropTypes.func: 函数

PropTypes.array: 数组

PropTypes.object: 对象

PropTypes.symbol: symbol

## Props, State and Render Function
Props 或 State 发生变化，则重新 Render

父组件重新 Render， 子组件也会重新 Render

## 虚拟 DOM (Document Object Model)
### 如何自己实现数据更新，视图同步更新的功能？
1. state 数据
2. JSX 模板
3. 数据与模板结合生成 DOM，挂载到页面上
4. state 发生改变
5. 数据 + 模板生成 DOM，替换原有的 DOM
### 缺陷
消耗性能，每次需要全量更新
### 优化
1. state 数据
2. JSX 模板
3. 数据与模板结合生成 DOM，挂载到页面上
4. state 发生改变
5. 生成真实 DOM
6. 与原始的 DOM 比较
7. 替换改动的部分，增量更新
### 缺陷
性能提升有限
### React 方案
1. state 数据
2. JSX 模板
3. 生成虚拟 DOM
4. 数据与模板结合生成 DOM，挂载到页面上
5. state 发生变化
6. 生成新的虚拟 DOM
7. 比较新旧虚拟 DOM
8. 修改 DOM，改变内容
### 总结
避免了直接对于 DOM 的操作，虚拟 DOM 本质上是 JS 对象，操作起来对于性能的消耗比较小

虚拟 DOM 的好处：

1. 性能提升
2. 跨端应用, React Native 通过虚拟 DOM 生成原生应用组件

### 虚拟 DOM 中的 Diff 算法
1. 同层比较
2. Key，不要使用 index 作为 key，导致不稳定

## Ref
获取元素的一种方法，同 `e.target`

`ref={(element) => {this.element = element}}`

不推荐这种方式，由于 setState 的**异步**机制，可能造成获取元素出错

需要使用 setState 的第二个参数 `setState(() => {}, () => {...})`

应用场景为设置动画等复杂场景

## React Life Cycle Functions 生命周期函数
某时刻组件自动调用的函数
![react_life_cycle_old](https://miro.medium.com/max/2000/1*fdGC22mqWBAQ7jOFPPAvIg.png "React Life Cycle Methods")
上图过旧，如下是最新的 React 生命周期

[![projects.wojtekmaj.pl_react-lifecycle-methods-diagram_.png](https://cdn5.maocdn.cn/img/2021/10/31/projects.wojtekmaj.pl_react-lifecycle-methods-diagram_.png)](https://img.wang/image/projectswojtekmajpl-react-lifecycle-methods-diagram.bZGri)

## Ajax 数据交互
一般使用在 `componentDidMount` 时，写在 `constructor` 中也可以
### Axios
1. `npm install axios`
2. 在组件中添加 `import axios from 'axios';`
3. `axios.get('/api/list').then(() => {}).catch(() => {})`


















