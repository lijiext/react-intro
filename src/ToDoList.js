import React, {Component} from "react";
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
import store from "./store";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    // 订阅 store 改变事件
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder={'Input Here'}
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button type={'primary'} onClick={this.handleButtonClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '370px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change input value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    // 更新组件状态, 将数据同步
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = {
      type: 'add todo item'
    };
    store.dispatch(action);
  }
}

export default ToDoList;