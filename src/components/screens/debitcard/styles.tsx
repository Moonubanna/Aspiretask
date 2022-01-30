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
  indicatorView: {
    color: colors.orange400,
  },
});
