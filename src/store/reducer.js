const defaultState = {
  inputValue: 'Hello World',
  list: []
};
const reducer = (state = defaultState, action) => {
  if (action.type === 'CHANGE_INPUT_VALUE') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
export default reducer;