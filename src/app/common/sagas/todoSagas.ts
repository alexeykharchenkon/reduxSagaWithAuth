import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TODO, LOAD_TODOS } from '@store/actions/actionTodoTypes';
import { addTodoStarted, addTodoSuccess, loadTodosFailure, loadTodosStarted, loadTodosSuccess } from '@store/actionCreators/todosActions';
import axios from "axios";

function* watchLoadTodos() {
    yield takeEvery(LOAD_TODOS, loadTodosAsync);
}
function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}
  
function* loadTodosAsync({ payload } : any) : any {
  yield put(loadTodosStarted());
  
  try {
      const todos = yield call(() =>
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${payload.from}&_limit=${payload.limit}`)
        .then(res => res.data)
      );
      
      yield put(loadTodosSuccess(todos));
    } catch (error) {
        yield put(loadTodosFailure(error));
    }
  }

  function* addTodo({ payload } : any) : any {
    yield put(addTodoStarted());
    yield put(addTodoSuccess(payload.todo));
    //yield put(addTodoFailure(error));
    }

  export default [
    watchAddTodo(),
    watchLoadTodos()
  ];
  