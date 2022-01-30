import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
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
} from './constants';
import {Provider} from 'react-redux';
import Store from './store';
import {colors} from './common/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Splash from './common/AuthLoadingScreen';
import DebitCard from './components/screens/debitcard';
import WeeklyLimit from './components/screens/weeklylimit';

//Libraries
import Orientation from 'react-native-orientation';
import NetInfo from '@react-native-community/netinfo';
import NoInternetLoader from './common/NoInternetLoader';

const store = Store();
const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();

    NetInfo.fetch().then(state => {});
    NetInfo.addEventListener(netInfoHandler);
    return () => {};
  }, []);

  function netInfoHandler(info: any) {
    if (!info?.isConnected) {
      setIsConnected(false);
    } else {
      setIsConnected(true);
    }
  }

  const RootStack = createStackNavigator();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={store}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.color_primary}
        />
        <NavigationContainer>
          <RootStack.Navigator
            headerShown={false}
            screenOptions={{animationEnabled: false}}
            initialRouteName="Splash">
            <RootStack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            {/* Debit Module */}
            <RootStack.Screen
              name={SCREEN.DEBIT_CARD}
              component={DebitCard}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name={SCREEN.WEEKLYLIMIT}
              component={WeeklyLimit}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
      {!isConnected && <NoInternetLoader loader={!isConnected} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.color_primary,
  },
});

export default App;
