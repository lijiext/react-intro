import React, {Component, Fragment} from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props);

    console.log('constructor method')

    // 组件的 state 或者 props 发生改变，页面重新 render
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  };

  // 只有在 mount 中调用，第一次挂载到页面

  // 本方法已被弃用
  // UNSAFE_componentWillMount() {
  //   // 页面挂载之前
  //   console.log('componet will mount')
  // }

  componentDidMount() {
    // 页面挂载之后
    console.log('component did mount')

    // 发送 api 请求
    axios.get('https://72994133-2192-4d73-b83a-5df37a049815.mock.pstmn.io/api/list').then((res) => {
      console.log(res.data);
      this.setState(() => ({list: [...res.data]}));
    }).catch(() => {
      alert('error')
    })
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 组件更新之前
    console.log('should componet update')
    return true
  }

  // 本方法已被弃用
  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   // 组件更新之前，在 should update 之后，true 才执行
  //   console.log('will update')
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 组件更新完成后
    console.log('update finished')
  }

  render() {
    console.log("Rendered!!!")
    return (
      // Fragment 占位符，替代 div
      <Fragment>
        <label htmlFor="inputArea">输入</label>
        <input type="text"
               className="input"
               id="inputArea"
               value={this.state.inputValue}
               onChange={this.handleInputChange.bind(this)}
               ref={(input) => {
                 this.input = input
               }}
        />
        <button type="submit" onClick={this.handleButtonClick}>提交</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  };

  handleInputChange(e) {
    // 使用 e.target 可以获取元素
    // console.log(e.target)
    // console.log('Input ', e.target.value);
    // const value = e.target.value;

    // 使用 ref 获取元素，不推荐的方式
    const value = this.input.value;
    // 函数变对象使用拷贝方式
    this.setState(() => ({inputValue: value}));
  };

  getTodoItem() {
    return this.state.list.map((item, index) => {
      //此处需要指定key，处理不够优雅
      return (
        <ToDoItem content={item} index={index} key={item} deleteItem={this.handleDeleteItem}/>
      )
    })
  }

  handleButtonClick() {
    // prevState 前值状态
    this.setState((prevState) => ({
      list: [...prevState.list, this.state.inputValue],
      inputValue: ''
    }));
  };

  handleDeleteItem(index) {
    console.log('Delete Index ' + index);
    this.setState((prevState) => {
      // 拷贝list
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }
}

export default ToDoList;