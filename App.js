import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'PT-regular': require('./assets/fonts/PTSans-Regular.ttf'),
  'PT-bold': require('./assets/fonts/PTSans-Bold.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
}

const styles = StyleSheet.create({


});
