import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST, INIT_LIST_ACTION} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
  }
)

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
  }
)

export const getInitListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
  }
)

export const getInitList = (data) => ({
  type: INIT_LIST,
  data
})

// 由于使用了 redux-thunk 所以可以返回函数
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('https://72994133-2192-4d73-b83a-5df37a049815.mock.pstmn.io/api/list')
//     .then(res => {
//       const data = res.data;
//       const action = getInitListAction(data);
//       dispatch(action);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }
// }