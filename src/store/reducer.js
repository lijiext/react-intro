const defaultState = {
  inputValue: '',
  list: ['Task 1']
};

// reducer 的固定写法，可以接收 state，但是不能修改 state
export default (state = defaultState, action) => {
  if (action.type === 'change input value') {
    // 对象深拷贝， 改变 state
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // return 给 store
    return newState;
  }

  if (action.type === 'add todo item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}