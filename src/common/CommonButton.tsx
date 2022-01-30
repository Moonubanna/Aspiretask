import React from 'react';
import {Pressable, Text} from 'react-native';
import translate from '../i18n/i18n';

import {colors} from './theme';
import {DIMENS, FONT_FAMILIY} from '../constants';

export default (
  onSearchPress: any,
  name: string,
  widthPercent: any,
  marginTop: number,
) => (
  <Pressable
    onPress={onSearchPress}
    style={({pressed}) => [
      {
        width: widthPercent,
        backgroundColor: colors.color_accent,
        opacity: pressed ? 0.5 : 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: DIMENS.px_14,
        marginTop: marginTop,
        borderRadius: DIMENS.px_50,
        alignSelf: 'center',
      },
    ]}>
    <Text
      style={{
        color: colors.white,
        fontFamily: FONT_FAMILIY.Font_Bold,
        fontSize: DIMENS.txt_size_large,
      }}>
      {name}
    </Text>
  </Pressable>
);
