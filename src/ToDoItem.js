import React, {Component} from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    // 通用写法，解决可能的性能问题
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  };

  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }
}

export default ToDoItem;