/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  RefreshControl,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  Animated,
  FlatList,
  Easing,
  ImageBackground,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
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
import {
  LOGO,
  EYE_HIDE,
  EYE_SHOW,
  LOGO_HORI,
  VISA_LOGO,
  ACCOUNT,
  WEEKLY,
  FREEZE,
  NEW_CARD,
  DEACTIVATED,
} from '../../../common/images';
import translate from '../../../i18n/i18n';
import {storeData, retrieveData} from '../../../common/AsyncStorage';
import {IconX, ICON_TYPE} from '../../../common/Icons';
import {BookContext} from '../../../contexts';
import * as Utils from '../../../utils';
import * as Handlers from './handlers';
//Hoc
import * as HOC from '../../../common/hoc';
import styles from './styles';
import headerComponent from './child_components/HeaderComponent';
import cardComponent from './child_components/CardComponent';

import {
  getDebitCardRequestDataAction,
  getClearDebitCardRequestDataAction,
} from '../../../actions';
import {colors} from '../../../common/theme';

const HeaderHOCView = HOC.HeaderHOC(View);

const DebitCard = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const dispatch = useDispatch();
  const {debitCardResponse, loading} = useSelector(
    state => ({
      debitCardResponse: state.getDebitCardRequestCasesReducer.response,
      loading: state.getDebitCardRequestCasesReducer.loading,
    }),
    shallowEqual,
  );

  const [savedUserData, setSavedUserData] = useState(undefined);
  const [availableBalance, setAvailableBalance] = useState('5000');
  const [isShowCard, setIsShowCard] = useState(false);
  const [cardReponse, setCardResponse] = useState(undefined);

  const [cardChildArray, setCardChildArray] = useState([
    {
      id: 1,
      name: translate('TOP_UP_ACCOUNT'),
      info: translate('TOP_UP_ACCOUNT_INFO'),
      image: ACCOUNT,
      is_radio: false,
      is_radio_enable: false,
    },
    {
      id: 2,
      name: translate('WEEKLY_SPENDING_LIMIT'),
      info: translate('WEEKLY_SPENDING_LIMIT_INFO'),
      image: WEEKLY,
      is_radio: true,
      is_radio_enable: false,
    },
    {
      id: 3,
      name: translate('FREEZE_CARD'),
      info: translate('FREEZE_CARD_INFO'),
      image: FREEZE,
      is_radio: true,
      is_radio_enable: false,
    },
    {
      id: 4,
      name: translate('GET_A_NEW_CARD'),
      info: translate('GET_A_NEW_CARD_INFO'),
      image: NEW_CARD,
      is_radio: false,
      is_radio_enable: false,
    },
    {
      id: 5,
      name: translate('DEACTIVATED_CARDS'),
      info: translate('DEACTIVATED_CARDS_INFO'),
      image: DEACTIVATED,
      is_radio: false,
      is_radio_enable: false,
    },
  ]);

  // Component did mount
  useEffect(() => {
    // initial loader calling before calling comment api
    getDebitCardApi();
    // component will unmount
    return () => {
      dispatch(getClearDebitCardRequestDataAction(undefined));
    };
  }, []);

  /* debit card response handling */
  useEffect(() => {
    if (debitCardResponse) {
      //Handler function for handle post save comment response
      const handleResponse = Handlers.setDebitCardData(debitCardResponse);
      if (handleResponse) {
        setCardResponse(handleResponse.data);
      }
    }
  }, [debitCardResponse]);

  // Call get debit card api
  function getDebitCardApi() {
    let requestObj = {
      api_type: 'GET',
    };
    Handlers.callGetDebitCardApi(
      requestObj,
      dispatch,
      getDebitCardRequestDataAction,
    );
  }
  function pressBack() {
    navigation.goBack();
  }

  function pressRightIcon() {}
  function pressCardVisibility() {
    setIsShowCard(!isShowCard);
  }
  function pressRadio(item: object, index: number) {
    if (item.id === 2) {
      // Navigate to weekly limit screen
      Utils.navigateWithParams(navigation, SCREEN.WEEKLYLIMIT, {
        data: {object: item, index: index},
        updateWeeklyLimit,
      });
    }
  }
  function updateWeeklyLimit(item: object, index: number, amount: string) {
    let savedCardChildArray = cardChildArray;
    savedCardChildArray[index].is_radio_enable = true;
    savedCardChildArray[index].info = `${translate(
      'WEEKLY_SPENDING_LIMIT_SET_INFO',
    )} ${amount}`;

    setCardChildArray([...savedCardChildArray]);
  }
  return (
    <HeaderHOCView
      isLoading={loading}
      backPress={() => {
        pressBack();
      }}
      onPressIcon={() => {
        pressRightIcon();
      }}
      style={{flex: 1}}
      isHeader={false}
      isRightIcon={false}>
      {/* Main Container */}
      <View style={styles.container}>
        {/* Header component */}
        {headerComponent(availableBalance)}
      </View>
      {/* Scroll card view */}
      {cardComponent(
        isShowCard,
        pressCardVisibility,
        cardChildArray,
        cardReponse,
        pressRadio,
      )}
    </HeaderHOCView>
  );
};

export default DebitCard;
