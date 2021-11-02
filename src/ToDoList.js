import React, {Component} from "react";
import {Input, Button, List} from "antd";
import 'antd/dist/antd.css';
import store from "./store/index.js";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = store.getState();
    console.log(this.state);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };
  // 需要在组件加载之后，给 store 注册监听器
  // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  componentDidMount() {
    // store 发生变化，执行此函数
    store.subscribe(this.handleStoreChange);
  };
    render() {
        return (
          <div style={{padding: '10px'}}>
            <Input 
              placeholder='Please Input Here'
              value={this.state.inputValue}
              style={{width: '300px'}}
              onChange={this.handleInputChange}
              ></Input>
              <Button 
              type='primary' 
              style={{marginLeft: '10px'}}
              onClick={this.handleButtonClick}
            >Submit</Button>
            <List 
              style={{width: '300px', marginTop: '10px'}} 
              bordered
              dataSource={this.state.list} 
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </div>
        )
    }
    handleInputChange(e) {
      const action = {
        type: 'CHANGE_INPUT_VALUE',
        value: e.target.value
      };
      store.dispatch(action);
    }
    handleStoreChange() {
      console.log('Store Changed!!!');
      // 获取 store 中的最新数据，并更新组件的状态
      this.setState(store.getState());
    };
    handleButtonClick() {
      const action = {
        type: 'ADD_TODO_ITEM'
      };
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