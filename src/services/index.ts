import axios from 'axios';
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
} from './../constants';
import * as Utils from './../utils';
export default async method => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (
        method?.payload !== undefined &&
        method?.payload?.api_type === 'POST'
      ) {
        console.log('request POST::::::', method);
        return resolve(await getPostApiCall(method));
      } else {
        console.log('request GET::::::', method);
        return resolve(await getApiWithoutAuthCall(method));
      }
    }, 100);
  });
};

export async function getApiWithoutAuthCall(method: any) {
  console.log('request_data', method);
  try {
    let apiName = method?.type;
    let response = axios.get(apiName, {headers: {}});

    let responseJson = await (await response).data;
    console.log('response>>>>>>>>>>', responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function getPostApiCall(method: object) {
  console.log('request_data', method);
  delete method.payload?.api_type;
  let formData = new FormData();
  try {
    for (const [key, value] of Object.entries(method.payload)) {
      formData.append(`${key}`, value);
    }
    let response = axios.post(method.type, formData, {
      headers: {
        'content-type': 'application/json',
      },
    });
    let responseJson = await (await response).data;
    console.log('response>>>>>>>>>>', responseJson);
    return responseJson;
  } catch (error) {
    console.warn('RESPONSE_EXCEPTION', error);
  }
}
