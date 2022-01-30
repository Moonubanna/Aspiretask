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
import {
  LOGO,
  LOGO_HORI,
  VISA_LOGO,
  EYE_HIDE,
  EYE_SHOW,
} from '../../../../common/images';
import translate from '../../../../i18n/i18n';
import {IconX, ICON_TYPE} from '../../../../common/Icons';
import {colors} from '../../../../common/theme';

import subChildCard from './SubChildCard';

const CardComponent = (
  isShowCard: boolean,
  pressCardVisibility: any,
  cardChildArray: any,
  cardReponse: object,
  pressRadio: any,
) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* parent view */}
      <View>
        {/* Card iew inner */}
        <View
          style={{
            marginTop: DIMENS.px_200,
          }}>
          {/* inner one view */}
          <View style={styles.innerView} />
          {/* Card view */}
          <View style={styles.cardView}>
            <Pressable
              onPress={() => {
                pressCardVisibility();
              }}
              style={({pressed}) => [
                styles.eyePressableView,
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              {isShowCard ? (
                <Image
                  style={styles.image}
                  source={EYE_HIDE}
                  resizeMode={'contain'}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={EYE_SHOW}
                  resizeMode={'contain'}
                />
              )}
              <Text style={styles.txtCard}>
                {isShowCard
                  ? translate('HIDE_CARD_NUMBER')
                  : translate('SHOW_CARD_NUMBER')}
              </Text>
            </Pressable>
            {/* Card view */}
            <View style={styles.cardMainView}>
              {/* name, card number, expiry and cvv */}
              <View style={styles.cardInnerView}>
                <Text style={styles.txtName}>{cardReponse?.name}</Text>
                <View
                  style={{
                    marginTop: DIMENS.px_10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[styles.txtNumber, {textAlignVertical: 'center'}]}>
                    {isShowCard ? cardReponse?.card_number : '####  ####  ####'}
                  </Text>
                  <Text style={[styles.txtNumber, {marginLeft: DIMENS.px_20}]}>
                    {cardReponse?.year}
                  </Text>
                </View>
                {/* Expiry & cvv */}
                <View
                  style={{
                    marginTop: DIMENS.px_10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.txtExpiryCvv}>
                    {cardReponse ? `Thru: ${cardReponse?.expired}` : ''}
                  </Text>
                  <Text
                    style={[
                      styles.txtExpiryCvv,
                      {marginLeft: DIMENS.px_20},
                    ]}>{cardReponse ? `CVV: ${isShowCard ? cardReponse?.cvv : '###'}` : ''}</Text>
                </View>
              </View>
              {/* aspire logo */}
              <Image
                style={styles.imageAspire}
                source={LOGO_HORI}
                resizeMode={'contain'}
              />
              {/* visa logo */}
              <Image
                style={styles.imageVisa}
                source={VISA_LOGO}
                resizeMode={'contain'}
              />
            </View>
          </View>
        </View>

        {/* bottom view */}
        {cardChildArray.map((item: object, index: number) =>
          subChildCard(item, index, pressRadio),
        )}
      </View>
    </ScrollView>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  innerView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: DIMENS.px_110,
    borderTopLeftRadius: DIMENS.px_16,
    borderTopRightRadius: DIMENS.px_16,
    backgroundColor: colors.white,
  },
  cardView: {
    height: DIMENS.px_240,
    margin: 16,
    backgroundColor: colors.transparent,
    justifyContent: 'flex-end',
  },
  eyePressableView: {
    width: DIMENS.px_170,
    height: DIMENS.px_60,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: DIMENS.px_5,
    paddingTop: DIMENS.px_50 / 6,
  },
  image: {
    width: DIMENS.px_18,
    height: DIMENS.px_18,
  },
  txtCard: {
    color: colors.color_accent,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium,
    marginLeft: DIMENS.px_5,
  },
  cardMainView: {
    height: DIMENS.px_210,
    backgroundColor: colors.color_accent,
    borderRadius: DIMENS.px_16,
  },
  cardInnerView: {
    height: DIMENS.px_210,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: DIMENS.px_20,
  },
  txtName: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Bold,
    fontSize: DIMENS.txt_size_large_extra_20,
  },
  txtNumber: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_large,
    marginTop: DIMENS.px_20,
  },
  txtExpiryCvv: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_large,
  },
  imageAspire: {
    width: DIMENS.px_70,
    position: 'absolute',
    top: DIMENS.px_20,
    right: DIMENS.px_20,
  },
  imageVisa: {
    width: DIMENS.px_70,
    position: 'absolute',
    bottom: DIMENS.px_20,
    right: DIMENS.px_20,
  },
});
