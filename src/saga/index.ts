import {all, takeLatest} from 'redux-saga/effects';
import {API} from '../constants';
import {getDebitCardRequestCasesSaga} from './GetDebitCardRequestCasesSaga';
// ---> Debit Module <----//
function* watchDebitCardRequestCaseAction() {
  yield takeLatest(API.APP_DEBITCARD_REQUEST, getDebitCardRequestCasesSaga);
}
function* rootSaga() {
  yield all([watchDebitCardRequestCaseAction()]);
}

export default rootSaga;
