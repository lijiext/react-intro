// UI 组件，负责页面渲染内容

import React from "react";
import {Button, Input, List} from "antd";

// 无状态组件，只是一个函数，性能更好，没有复杂的生命周期
const ToDoListUI = (props) => {
  return (
    <div style={{padding: '10px'}}>
      <Input
        placeholder='Please Input Here'
        value={props.inputValue}
        style={{width: '300px'}}
        onChange={props.handleInputChange}
      />
      <Button
        type='primary'
        style={{marginLeft: '10px'}}
        onClick={props.handleButtonClick}
      >Submit</Button>
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          // UI 组件传值，关注 this 指向
          <List.Item onClick={() => {
            props.handleItemDelete(index)
          }}>{item}</List.Item>)}
      />
    </div>
  )
}

// class ToDoListUI extends Component {
//   // 只有一个 render 函数，为无状态组件
//   render() {
//     return (
//       <div style={{padding: '10px'}}>
//         <Input
//           placeholder='Please Input Here'
//           value={this.props.inputValue}
//           style={{width: '300px'}}
//           onChange={this.props.handleInputChange}
//         />
//         <Button
//           type='primary'
//           style={{marginLeft: '10px'}}
//           onClick={this.props.handleButtonClick}
//         >Submit</Button>
//         <List
//           style={{width: '300px', marginTop: '10px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             // UI 组件传值，关注 this 指向
//             <List.Item onClick={(index) => {
//               this.props.handleItemDelete(index)
//             }}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default ToDoListUI;