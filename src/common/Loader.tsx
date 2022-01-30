import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Modal} from 'react-native';
import {colors} from './theme';

export default class Loader extends Component {
  render() {
    const {loader} = this.props;
    return (
      <Modal
        visible={loader}
        //animationType={'slide'}
        style={{borderWidth: 3, borderColor: 'red'}}
        transparent={true}>
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={colors.white} />
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
    backgroundColor: colors.transparent,
  },
});
