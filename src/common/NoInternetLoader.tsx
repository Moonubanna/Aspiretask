import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
} from 'react-native';
import {colors} from './theme';
import {
  CirclesLoader,
  PulseLoader,
  TextLoader,
  DotsLoader,
  ColorDotsLoader,
  NineCubesLoader,
  BubblesLoader,
} from 'react-native-indicator';
import {DIMENS, FONT_FAMILIY, WIDTH} from '../constants';
import translate from '../i18n/i18n';
import {LOGO} from './images';

export default class NoInternetLoader extends Component {
  render() {
    const {loader} = this.props;
    return (
      <Modal
        visible={loader}
        //animationType={'slide'}
        style={{borderWidth: 3, borderColor: 'red'}}
        transparent={true}>
        <View style={styles.container}>
          {/* <BubblesLoader size={42} dotRadius={10} color={colors.white} /> */}
          <Image
            style={styles.image}
            source={LOGO}
            resizeMode={'contain'}
          />
          <Text style={styles.text} numberOfLines={1}>
            {translate('NO_INTERNET')}
          </Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.color_primary,
  },
  text: {
    fontSize: DIMENS.txt_size_medium_14,
    color: colors.white,
    fontFamily: FONT_FAMILIY.Font_Medium,
    marginTop: DIMENS.px_20,
  },
  image: {
    width: WIDTH / 3,
    height: WIDTH / 3,
  },
});
