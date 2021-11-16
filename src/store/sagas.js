import {takeEvery, put} from 'redux-saga/effects';
import {INIT_LIST} from "./actionTypes";
import axios from "axios";
import {getInitListAction} from "./actionCreators"; //redux-saga effects

function* fetchList() {
  // generator 函数 不要使用 promise 形式
  try {
    const res = yield axios.get('https://72994133-2192-4d73-b83a-5df37a049815.mock.pstmn.io/api/list');
    const action = getInitListAction(res.data);
    yield put(action);
  } catch (e) {
    // 网络请求失败，使用 try {} catch {}
    console.log(e);
  }

}

// generator 函数
function* mySaga() {
  // 捕获 action
  yield takeEvery(INIT_LIST, fetchList);
}

export default mySaga;