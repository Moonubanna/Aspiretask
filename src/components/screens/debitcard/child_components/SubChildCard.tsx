/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';
import {FONT_FAMILIY, DIMENS} from '../../../../constants';
import {TOGGLE} from '../../../../common/images';
import {colors} from '../../../../common/theme';

const SubChildCard = (item: object, index: number, pressRadio: any) => {
  return (
    <Pressable
      onPress={() => {
        pressRadio(item, index);
      }}
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <View
        style={{
          width: item.is_radio ? '80%' : '100%',
          flexDirection: 'row',
        }}>
        <Image style={styles.image} source={item.image} resizeMode="contain" />
        <View style={styles.leftView}>
          <Text testID="txtName" style={styles.txtName}>{item.name}</Text>
          <Text testID="txtInfo" style={styles.txtInfo}>{item.info}</Text>
        </View>
      </View>
      {item.is_radio && (
        <View style={styles.rigthView}>
          {item.is_radio_enable ? (
            <Image
              style={{
                width: DIMENS.px_32,
                height: DIMENS.px_28,
                tintColor: colors.color_accent,
              }}
              source={TOGGLE}
              resizeMode={'contain'}
            />
          ) : (
            <Image
              style={{
                width: DIMENS.px_32,
                height: DIMENS.px_28,
                tintColor: colors.grey400,
              }}
              source={TOGGLE}
              resizeMode={'contain'}
            />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default SubChildCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: DIMENS.px_10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: DIMENS.px_35,
    height: DIMENS.px_35,
  },
  leftView: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: DIMENS.px_10,
  },
  rigthView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtName: {
    color: colors.black,
    fontFamily: FONT_FAMILIY.Font_Medium,
    fontSize: DIMENS.txt_size_medium_14,
  },
  txtInfo: {
    color: colors.grey400,
    fontFamily: FONT_FAMILIY.Font_Regular,
    fontSize: DIMENS.txt_size_small,
    marginTop: DIMENS.px_5,
  },
});
