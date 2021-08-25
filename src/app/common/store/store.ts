import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@common/sagas/';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);