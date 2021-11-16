import React, {Component} from "react";
import {connect} from "react-redux";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
        <button>提交</button>
        <ul>
          <li>Task 1</li>
        </ul>
      </div>
    )
  };
}

// store -> props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// props -> store ≈ store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      console.log(e.target.value);
      const action = {
        type: 'CHANGE_INPUT_VALUE',
        value: e.target.value
      };
      dispatch(action);
    }
  }
}
// 按照规则链接，数据映射
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);