// 容器组件，关注业务逻辑

import React, {Component} from "react";

import store from "./store/index.js";
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/actionCreators";
import ToDoListUI from "./ToDoListUI";
import 'antd/dist/antd.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 改变 this 指向
    this.handleItemDelete = this.handleItemDelete.bind(this);
  };

  // 需要在组件加载之后，给 store 注册监听器
  // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  componentDidMount() {
    // store 发生变化，执行此函数
    store.subscribe(this.handleStoreChange);
  };

  render() {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange() {
    // 获取 store 中的最新数据，并更新组件的状态
    this.setState(store.getState());
  };

  handleButtonClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  };

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

/*
1. 改变 store 数据
2. 使用 action 告知 reducer
3. store.dispatch(action)
4. store 收到数据和 action 传递给 reducer
*/

export default ToDoList;