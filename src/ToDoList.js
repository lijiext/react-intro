import React, {Component, Fragment} from "react";
import './style.css'


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
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
        <button type="submit" onClick={this.handleButtonClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              //此处需要指定key，处理不够优雅
              return (<li
                key={index}
                onClick={this.handleDeleteItem.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
              />)
            })
          }
        </ul>
      </Fragment>
    );
  };

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  };

  handleButtonClick() {
    this.setState({
      // 扩展运算符
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  };

  handleDeleteItem(index) {
    console.log('you clicked ' + index);
    // 拷贝list
    const list = [...this.state.list];
    list.splice(index, 1);

    // immutable 请不要直接修改state，可能造成性能问题
    this.setState({
      list: list
    })
  }
}

export default ToDoList;