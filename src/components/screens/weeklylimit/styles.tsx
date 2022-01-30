import {StyleSheet} from 'react-native';
import {colors} from '../../../common/theme';
import {DIMENS, FONT_FAMILIY} from '../../../constants';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.color_primary_dark,
    flex: 1,
    width: '100%',
  },
  textContainer: {
    width: '100%',
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium_14,
    textAlign: 'center',
  },
  txtSpendingLimit: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Bold,
    fontSize: DIMENS.txt_size_large_extra_20,
    marginLeft: DIMENS.px_16,
  },
  weeklyView: {
    flex: 1,
    width: '100%',
    padding: DIMENS.px_16,
    marginTop: DIMENS.px_50,
    backgroundColor: colors.white,
    borderTopLeftRadius: DIMENS.px_16,
    borderTopRightRadius: DIMENS.px_16,
  },
  weeklyTopView: {
    paddingVertical: DIMENS.px_10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWeekly: {
    width: DIMENS.px_18,
    height: DIMENS.px_18,
  },
  txtWeekly: {
    color: colors.black,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium,
    marginLeft: DIMENS.px_10,
  },
  balanceSubView: {
    paddingHorizontal: DIMENS.px_12,
    paddingVertical: DIMENS.px_2,
    backgroundColor: colors.color_accent,
    borderRadius: DIMENS.px_5,
  },
  txtBalanceGreen: {
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium_14,
  },
  txtAmount: {
    color: colors.black,
    fontFamily: FONT_FAMILIY.Font_Bold,
    fontSize: DIMENS.txt_size_large,
    marginLeft: DIMENS.px_10,
  },
  txtLimitInfo: {
    color: colors.grey400,
    fontFamily: FONT_FAMILIY.Font_Regular,
    fontSize: DIMENS.txt_size_medium,
    marginTop: DIMENS.px_20,
  },
  amountView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: DIMENS.px_10,
    borderBottomWidth: DIMENS.px_05,
    borderBottomColor: colors.grey400,
  },
});
