import React, {Component, Fragment} from "react";
import ToDoItem from "./ToDoItem";
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  };

  render() {
    return (
      // Fragment 占位符，替代 div
      <Fragment>
        <label htmlFor="inputArea">输入</label>
        <input type="text"
               className="input"
               id="inputArea"
               value={this.state.inputValue}
               onChange={this.handleInputChange.bind(this)}
        />
        <button type="submit" onClick={this.handleButtonClick}>提交</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  };

  handleInputChange(e) {
    console.log('Input ', e.target.value);
    const value = e.target.value;
    // 函数变对象使用拷贝方式
    this.setState(() => ({inputValue: value}));
  };

  getTodoItem() {
    return this.state.list.map((item, index) => {
      //此处需要指定key，处理不够优雅
      return (
        <ToDoItem content={item} index={index} key={index} deleteItem={this.handleDeleteItem}/>
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