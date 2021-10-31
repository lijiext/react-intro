import React, {Component} from "react";
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    // 通用写法，解决可能的性能问题
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 检测是否需要更新
    return nextProps.content !== this.props.content;
  }

  render() {
    const {content} = this.props;
    // JSX --> JS Object --> Real DOM
    // JSX 模板语法
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    );

    // 底层 API
    // return React.createElement('div', {}, 'item')
  };

  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }
}

ToDoItem.propTypes = {
  // 数据类型校验，可以自定义数据类型

  // oneOfType 可以在多种数据类型中选择
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  // 若没有获取到其他组件传递的值，则不进行校验
  test: PropTypes.string.isRequired
}
ToDoItem.defaultProps = {
  // 设置默认值
  test: "default value of test"
}
export default ToDoItem;