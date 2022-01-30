import {API, APP_DEBITCARD_CLEAR} from '../constants';

// <--- Debit Module --->
export function getDebitCardRequestDataAction(data: object) {
  return {
    type: API.APP_DEBITCARD_REQUEST,
    payload: data,
  };
}

export function getClearDebitCardRequestDataAction(data: any) {
  return {
    type: APP_DEBITCARD_CLEAR,
    payload: data,
  };
}
