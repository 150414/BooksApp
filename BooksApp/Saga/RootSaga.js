import { all } from "redux-saga/effects";
import {waitForFetchProducts} from '../Saga/Saga';

 export function* rootSaga() {
  yield all([waitForFetchProducts()]);
}