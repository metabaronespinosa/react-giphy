import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(sagaMiddleware)
 );
}
