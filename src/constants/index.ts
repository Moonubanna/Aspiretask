import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
export const BASE_URL = 'http://18.204.96.100/api/v1/'; //http://52.6.124.100
//Guideline sizes are based on standard ~5" screen mobile device
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const VERTICAL_SCALE = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const MODERATE_SCALE = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const API = {
  //image base url path
  IMAGE_BASE_PATH: 'http://18.204.96.100/api/v1/',
  // Auth
  APP_DEBITCARD_REQUEST: BASE_URL + 'auth/card-detail',
};

export const APP_PARAMS = {
  ROLE: 'role',
};
export const KEY = {
  LANG_DATA: 'english',
  SUCCESS_: true,
  FAILED_: false,
};

export const LOCALES = {
  ENGLISH: {id: 1, name: 'en', label: 'ENGLISH'},
  HINDI: {id: 2, name: 'hi', label: 'हिंदी'},
};

export const FONT_FAMILIY = {
  Font_Black:
    Platform.OS == 'android' ? 'AirbnbCerealBlack' : 'AirbnbCerealApp-Black',
  Font_Bold_Fully:
    Platform.OS == 'android'
      ? 'AirbnbCerealExtraBold'
      : 'AirbnbCerealApp-ExtraBold',
  Font_Bold:
    Platform.OS == 'android' ? 'AirbnbCerealBold' : 'AirbnbCerealApp-Bold',
  Font_Light:
    Platform.OS == 'android' ? 'AirbnbCerealLight' : 'AirbnbCerealApp-Light',
  Font_Medium:
    Platform.OS == 'android' ? 'AirbnbCerealMedium' : 'AirbnbCerealApp-Medium',
  Font_Regular:
    Platform.OS == 'android' ? 'AirbnbCerealBook' : 'AirbnbCerealApp-Book',
  Ittalian:
    Platform.OS == 'android' ? 'AirbnbCerealLight' : 'AirbnbCerealApp-Light',
  Font_Header_Logo: Platform.OS == 'android' ? 'Billabong' : 'Billabong',
  Font_Arista_2:
    Platform.OS == 'android' ? 'Arista2.0Alternate' : 'Arista2.0Alternate',
};

export const DIMENS = {
  px_0: 0,
  px_05: 0.5,
  px_1: 1,
  px_2: 2,
  px_3: 3,
  px_5: 5,
  px_7: 7,
  px_8: 8,
  px_10: 10,
  px_12: 12,
  px_300: 300,
  px_14: 14,
  px_15: 15,
  px_16: 16,
  px_18: 18,
  px_20: 20,
  px_22: 22,
  px_23: 23,
  px_25: 25,
  px_28: 28,
  px_30: 30,
  px_32: 32,
  px_35: 35,
  px_40: 40,
  px_45: 45,
  px_50: 50,
  px_55: 55,
  px_60: 60,
  px_65: 65,
  px_70: 70,
  px_75: 75,
  px_80: 80,
  px_90: 90,
  px_100: 100,
  px_110: 110,
  px_120: 120,
  px_130: 130,
  px_140: 140,
  px_150: 150,
  px_160: 160,
  px_170: 170,
  px_180: 180,

  px_200: 200,
  px_210: 210,
  px_220: 220,
  px_230: 230,
  px_240: 240,
  px_250: 250,
  px_260: 260,
  px_320: 320,

  btn_font_size: 16,
  btn_h: 40,
  devider_h: 1,
  devider_h_half: 0.5,
  devider_h_1: 1,
  txt_size_small_small: 10,
  txt_size_small: 11,
  txt_size_small_12: 12,
  txt_size_min_small: 8,
  txt_size_min_small_9: 9,
  txt_size_medium: 13,
  txt_size_medium_14: 14,
  txt_size_medium_1: 15,
  txt_size_large: 16,
  txt_size_large_extra: 18,
  txt_size_large_extra_20: 20,
  txt_size_large_extra_26: 26,
  txt_size_large_extra_30: 30,
  txt_size_large_extra_40: 40,
  row_h: 50,
  minHeight: 50,
  row_img_w: 60,
  row_img_big: 70,
  row_img_w_2: 50,
  tab_width: 24,

  //Category Size
  cat_img_width: 55,
  cat_img_height: 55,
  cat_img_radius: 27.5,
};

export const CURRENCY = {
  RUPEES: '\u20B9',
  DOLLER: '\u0024',
  EURO: '\u20AC',
  JAPANES_YEN: '\u00A5',
  POUND_STERLING: '\u00A3',
};
export const SCREEN = {
  DEBIT_CARD: 'DebitCard',
  WEEKLYLIMIT: 'WeeklyLimit',
};

//HEIGHT AND WIDTH
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

// Internet connection state
export const APP_START = 'APP_START';
export const APP_START_SUCCESS = 'APP_START_SUCCESS';
export const APP_START_FAIL = 'APP_START_FAIL';
export const CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE';

//Debit module
export const APP_DEBITCARD_SUCESS = 'APP_DEBITCARD_SUCESS';
export const APP_DEBITCARD_FAIL = 'APP_DEBITCARD_FAIL';
export const APP_DEBITCARD_CLEAR = 'APP_DEBITCARD_CLEAR';

export const APP_UPDATE_GLOBLE_REQUEST = 'APP_UPDATE_GLOBLE_REQUEST';