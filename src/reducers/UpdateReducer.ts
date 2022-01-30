import {API} from '../constants';

export default function updateReducer(state = {}, action) {
  switch (action.type) {
    case API.APP_UPDATE_GLOBLE_REQUEST:
      return {...state, loading: false, response: false};

    default:
      return state;
  }
}
