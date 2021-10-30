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