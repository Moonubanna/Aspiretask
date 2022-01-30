import {Alert} from 'react-native';
import {KEY} from '../../../constants';

// Calling api's
export function callGetDebitCardApi(
  requestObj: object,
  dispatch: any,
  getDebitCardRequestDataAction: any,
) {
  let requestData = requestObj;
  dispatch(getDebitCardRequestDataAction(requestData));
}
// Handle api response
export function setDebitCardData(response: object) {
  if (response !== undefined) {
    if (response.status === KEY.SUCCESS_) {
      return response;
    } else {
      Alert.alert(response.message);
    }
  }
}
