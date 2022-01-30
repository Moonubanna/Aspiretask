/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import {
  WIDTH,
  KEY,
  APP_PARAMS,
  FONT_FAMILIY,
  SCREEN,
} from '../../constants/index';
import {colors} from '../theme';
import {DIMENS} from '../../constants';
import translate from '../../i18n/i18n';
import Loader from '../Loader';
import {LOGO, BACK} from '../images';

const HeaderHOC =
  Comp =>
  ({
    isHeader,
    isLoading,
    isRightIcon,
    backPress,
    onPressIcon,
    children,
    ...props
  }) => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        {isHeader && (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 55,
              alignItems: 'center',
              paddingHorizontal: 10,
              backgroundColor: colors.color_primary,
            }}>
            <Pressable
              onPress={backPress}
              style={({pressed}) => [
                {
                  width: '50%',
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              <Image
                style={{
                  width: DIMENS.px_25,
                  height: DIMENS.px_28,
                  tintColor: colors.white,
                }}
                source={BACK}
                resizeMode={'contain'}
              />
            </Pressable>
            {isRightIcon && (
              <Pressable
                onPress={onPressIcon}
                style={({pressed}) => [
                  {
                    width: DIMENS.px_30,
                    height: DIMENS.px_30,
                    right: DIMENS.px_10,
                    opacity: pressed ? 0.5 : 1,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Image
                  style={{
                    width: DIMENS.px_25,
                    height: DIMENS.px_25,
                  }}
                  source={LOGO}
                  resizeMode={'contain'}
                />
              </Pressable>
            )}
          </View>
        )}
        <Comp {...props}>{children}</Comp>
        {isLoading != undefined && isLoading && <Loader />}
      </View>
    );
  };
export default HeaderHOC;
