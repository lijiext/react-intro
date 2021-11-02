const defaultState = {
    inputValue: '',
    list: [
        'Task 1',
        'Task 2', 
        'Task 3'
    ]
}
// 某些 js 引擎不支持导出无名函数
const reducer = (state = defaultState, action) => {
    console.log(state, action);
    if (action.type === 'CHANGE_INPUT_VALUE') {
        // 深拷贝，不修改原来的数据，固定写法
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'ADD_TODO_ITEM') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
};

export default reducer;

