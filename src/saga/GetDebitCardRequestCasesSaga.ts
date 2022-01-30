import {put} from 'redux-saga/effects';
import {APP_DEBITCARD_SUCESS, APP_DEBITCARD_FAIL} from '../constants';
import callApis from '../services';

export function* getDebitCardRequestCasesSaga(action: any) {
  try {
    const data = yield callApis(action);
    yield put({
      type: APP_DEBITCARD_SUCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: APP_DEBITCARD_FAIL,
      payload: null,
    });
  }
}
