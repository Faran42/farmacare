import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts, NothingYouCouldDo_400Regular } from '@expo-google-fonts/nothing-you-could-do'

import Routes from './src/routes'

import Login from './src/pages/Login';

export default function App() {

  let [fontsLoaded] = useFonts({
    NothingYouCouldDo_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <>      
      <StatusBar style="light" backgroundColor="transparent" translucent={true} />
      <Routes />
    </>
  );
}
