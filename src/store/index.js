import {createStore, applyMiddleware, compose} from "redux";
import reducer from './reducer';
// import thunk from 'redux-thunk';
// 使用redux-saga中间件
import createSagaMiddleware from 'redux-saga';
import ToDoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
// );
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer
);

sagaMiddleware.run(ToDoSagas);

export default store;