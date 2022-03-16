import { createStore, applyMiddleware } from 'redux';
import rootReducers from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { onLoadUser } from './users/reduxSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];


export const store = createStore(rootReducers, applyMiddleware(...middleware));
sagaMiddleware.run(onLoadUser);

export default store;