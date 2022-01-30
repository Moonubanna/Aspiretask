import {
  API,
  APP_DEBITCARD_SUCESS,
  APP_DEBITCARD_FAIL,
  APP_DEBITCARD_CLEAR,
} from '../constants';

export default function getDebitCardRequestCasesReducer(
  state = {},
  action: any,
) {
  switch (action.type) {
    case API.APP_DEBITCARD_REQUEST:
      return {...state, loading: true};

    case APP_DEBITCARD_SUCESS:
      return {...state, loading: false, response: action.payload};

    case APP_DEBITCARD_FAIL:
      return {...state, loading: false, response: null};

    case APP_DEBITCARD_CLEAR:
      return {...state, loading: false, response: null};

    default:
      return state;
  }
}
