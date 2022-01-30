import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Image, Alert} from 'react-native';
import {colors} from './theme';
import {LOGO} from './images';
import {retrieveData} from './AsyncStorage';

import {KEY, SCREEN, DIMENS, WIDTH} from '../constants';
import * as Utils from '../utils';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  // Fetch the token from storage then navigate to our appropriate place
  function _bootstrapAsync() {
    setTimeout(() => {
      Utils.clearStack(navigation, SCREEN.DEBIT_CARD);
    }, 2000);
  }
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: DIMENS.px_100,
          height: DIMENS.px_100,
        }}
        source={LOGO}
        resizeMode={'contain'}
      />
      <ActivityIndicator
        color={colors.color_primary}
        size="large"
        style={{marginTop: DIMENS.px_20}}
      />
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.color_primary,
  },
});
