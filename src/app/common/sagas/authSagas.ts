import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "@store/actions/actionAuthTypes";
import { loginSuccess, registerSuccess } from "@store/actionCreators/authActions";

function* watchLogin() {
    yield takeEvery(USER_LOGIN, login);
}

function* login({payload}: any) : any {
  yield put(loginSuccess(payload.user));
}

function* watchRegister() {
  yield takeEvery(USER_REGISTER, register);
}

function* register({payload}: any) : any {
  yield put(registerSuccess(payload.user));
}

  
/*function* loginAsync({ payload } : any) : any { 
  try {
      const user = yield call(() => {});
      
      yield put(loginSuccess(user));
    } catch (error) {}
  }*/

  export default [
    watchLogin(),
    watchRegister(),
  ];
  