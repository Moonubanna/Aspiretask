import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {FONT_FAMILIY, DIMENS} from '../../../../constants';
import {LOGO} from '../../../../common/images';
import translate from '../../../../i18n/i18n';
import {colors} from '../../../../common/theme';

const HeaderComponent = (availableBalance: string) => {
  return (
    <View style={styles.container}>
      <View style={styles.subChild}>
        <Text style={styles.txtDebitCard}>{translate('DEBIT_CARD')}</Text>
        <Text style={styles.txtAvailableBalance}>
          {translate('AVAILABLE_BALANCE')}
        </Text>
        <View style={styles.balanceConatainer}>
          <View style={styles.balanceSubView}>
            <Text style={styles.txtBalanceGreen}>{'S$'}</Text>
          </View>
          <Text style={styles.txtBalanceAmount}>{availableBalance}</Text>
        </View>
      </View>
      <Image style={styles.imageLogo} source={LOGO} resizeMode={'contain'} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    background: colors.headerColor1,
    padding: DIMENS.px_15,
  },
  subChild: {
    width: '100%',
    flexDirection: 'column',
    paddingTop: DIMENS.px_20,
  },
  txtDebitCard: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Bold,
    fontSize: DIMENS.txt_size_large_extra_20,
  },
  txtAvailableBalance: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Regular,
    fontSize: DIMENS.txt_size_medium_14,
    marginTop: DIMENS.px_20,
  },
  balanceConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DIMENS.px_10,
  },
  balanceSubView: {
    paddingHorizontal: DIMENS.px_14,
    paddingVertical: DIMENS.px_3,
    backgroundColor: colors.color_accent,
    borderRadius: DIMENS.px_5,
  },
  txtBalanceGreen: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium_14,
  },
  txtBalanceAmount: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Bold,
    fontSize: DIMENS.txt_size_large_extra_20,
    marginLeft: DIMENS.px_7,
  },
  imageLogo: {
    width: DIMENS.px_25,
    height: DIMENS.px_25,
    position: 'absolute',
    right: DIMENS.px_15,
    top: DIMENS.px_15,
  },
});
