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
  METER,
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
import {colors} from '../../../common/theme';
import commonButton from './../../../common/CommonButton';

const HeaderHOCView = HOC.HeaderHOC(View);

import amountComponent from './child_components/AmountComponent';

//route?.params?.savedReelCommentObjectAsync(commentList.length);
const WeeklyLimit = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const dispatch = useDispatch();

  const [previousObject, setPreviousObject] = useState(
    route?.params?.data?.object,
  );
  const [selectedAmount, setSelectedAmount] = useState('');
  const [amountArray, setAmountArray] = useState(['5,000', '10,000', '15,000']);

  // Component did mount
  useEffect(() => {}, []);

  function pressBack() {
    navigation.goBack();
  }

  function pressRightIcon() {}
  function pressAmountItem(item: string) {
    setSelectedAmount(item);
  }
  function pressSave() {
    if (selectedAmount) {
      route?.params?.updateWeeklyLimit(
        route?.params?.data?.object,
        route?.params?.data?.index,
        selectedAmount,
      );
      pressBack();
    } else {
      Alert.alert('Please select amount.');
    }
  }
  return (
    <HeaderHOCView
      isLoading={false}
      backPress={() => {
        pressBack();
      }}
      onPressIcon={() => {
        pressRightIcon();
      }}
      style={{flex: 1}}
      isHeader={true}
      isRightIcon={true}>
      {/* Main Container */}
      <View style={styles.container}>
        <Text style={styles.txtSpendingLimit}>
          {translate('SPENDING_LIMIT')}
        </Text>
        {/* Limit view */}
        <View style={styles.weeklyView}>
          {/* Top view */}
          <View style={styles.weeklyTopView}>
            <Image
              style={styles.imageWeekly}
              source={METER}
              resizeMode={'contain'}
            />
            <Text style={styles.txtWeekly}>
              {translate('SPENDING_LIMIT_INFO')}
            </Text>
          </View>
          {/* Amount visible view */}
          <View style={styles.amountView}>
            <View style={styles.balanceSubView}>
              <Text style={styles.txtBalanceGreen}>{'S$'}</Text>
            </View>
            <Text style={styles.txtAmount}>{selectedAmount}</Text>
          </View>
          {/* weekly limit messag */}
          <Text style={styles.txtLimitInfo}>{translate('WEEKLY_INFO')}</Text>
          {/* Amount list */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: DIMENS.px_20}}>
              {amountArray.map((item, index) =>
                amountComponent(item, index, pressAmountItem),
              )}
            </ScrollView>
          </View>

          {/* Common button for save */}
          <View
            style={{
              position: 'absolute',
              bottom: DIMENS.px_10,
              left: 0,
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {commonButton(pressSave, translate('SAVE'), '70%', DIMENS.px_10)}
          </View>
        </View>
      </View>
    </HeaderHOCView>
  );
};

export default WeeklyLimit;
