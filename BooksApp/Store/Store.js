import {combineReducers,createStore,applyMiddleware} from 'redux'
import Reducers from '../Redux/Reducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../Saga/RootSaga'
const sagaMiddleware = createSagaMiddleware();
const ReducerData = combineReducers({
    categories:Reducers
})
const configstore = createStore(ReducerData,applyMiddleware(sagaMiddleware))
 sagaMiddleware.run(rootSaga)
export default configstore