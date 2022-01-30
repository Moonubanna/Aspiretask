import {combineReducers} from 'redux';
// Auth
import getDebitCardRequestCasesReducer from './GetDebitCardRequestCasesReducer';
//update globle
import updateReducer from './UpdateReducer';

const rootReducer = combineReducers({
  getDebitCardRequestCasesReducer,
  updateReducer,
});

export default rootReducer;
