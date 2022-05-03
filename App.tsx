/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React from 'react';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
