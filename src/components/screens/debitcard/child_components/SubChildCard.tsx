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
      {/* Left view */}
      <View
        style={{
          width: item.is_radio ? '80%' : '100%',
          flexDirection: 'row',
        }}>
        {/* Icon */}
        <Image
          style={styles.image}
          source={item.image}
          resizeMode={'contain'}
        />
        {/* Left child right view */}
        <View style={styles.leftView}>
          <Text style={styles.txtName}>{item.name}</Text>
          <Text style={styles.txtInfo}>{item.info}</Text>
        </View>
      </View>
      {/* Right view for radio button */}
      {item.is_radio && (
        <View style={styles.rigthView}>
          {item.is_radio_enable ? (
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name="toggle-switch"
              color={colors.color_accent}
              size={DIMENS.px_32}
            />
          ) : (
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name="toggle-switch-off"
              color={colors.grey400}
              size={DIMENS.px_32}
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
