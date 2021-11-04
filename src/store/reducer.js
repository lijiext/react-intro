import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";

// store 的默认值
const defaultState = {
  inputValue: '',
  list: []
}
// 某些 js 引擎不支持导出无名函数
const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝，不修改原来的数据，固定写法
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    // splice 方法，可以删除数组中的某一项
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};

export default reducer;

