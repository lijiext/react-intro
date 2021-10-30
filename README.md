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