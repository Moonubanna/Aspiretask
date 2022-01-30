import {Alert, Platform} from 'react-native';
import {
  APP_PARAMS,
  FONT_FAMILIY,
  DIMENS,
  emailRegex,
  KEY,
  passRegex,
  SCREEN,
  WIDTH,
  HEIGHT,
  BASE_URL,
} from '../../../constants';
import * as Utils from '../../../utils';

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
