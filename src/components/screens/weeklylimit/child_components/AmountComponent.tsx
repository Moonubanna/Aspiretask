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
} from 'react-native';
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
} from '../../../../constants';
import {LOGO, DUMMY_PAGER} from '../../../../common/images';
import translate from '../../../../i18n/i18n';
import {IconX, ICON_TYPE} from '../../../../common/Icons';
import {colors} from '../../../../common/theme';

const AmountComponent = (item: string, index: number, pressAmountItem: any) => {
  return (
    <Pressable
      onPress={() => {
        pressAmountItem(item);
      }}
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <Text style={styles.txtAmount}>{`S$ ${item}`}</Text>
    </Pressable>
  );
};

export default AmountComponent;

const styles = StyleSheet.create({
  container: {
    width: DIMENS.px_100,
    padding: DIMENS.px_12,
    backgroundColor: colors.color_accent_transparent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: DIMENS.px_10,
    borderRadius: DIMENS.px_5,
  },
  txtAmount: {
    color: colors.color_accent,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium_1,
  },
});
