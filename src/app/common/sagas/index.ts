import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import todoSagas from './todoSagas'

function* rootSaga() {
  yield all([...todoSagas, ...authSagas]);
}

export default rootSaga;