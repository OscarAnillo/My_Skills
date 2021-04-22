import React, { useState } from 'react';
//import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import * as Font from 'expo-font'
import AppLoading  from 'expo-app-loading'



import { AppNavigator } from './routes/HomeStack'


const getFonts = () => Font.loadAsync({
  'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf')
})

export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false)

  if(fontLoaded){
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  
}

