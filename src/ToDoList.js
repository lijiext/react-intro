import React, {Component} from "react";
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';

const data = [
  '1', '2', '3'
]

class ToDoList extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input placeholder={'todo info'} style={{width: '300px', marginRight: '10px'}}/>
          <Button type={'primary'}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '370px'}}
          bordered
          dataSource={data}
          renderItem={(item, index) => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default ToDoList;