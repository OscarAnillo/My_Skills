import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import About from '../screens/About';
import FrontEnd from '../screens/Frontend';
import BackEnd from '../screens/Backend';

const {Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator initialRouteName="Home" screenOptions={{
        headerStyle : {backgroundColor: '#111'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontFamily:'Poppins-Bold'},
     }} >

        <Screen name="Intro" component={Home} />
        <Screen name="About" component={About} />
        <Screen name="Front-End" component={FrontEnd} />
        <Screen name="Back-End" component={BackEnd} />
    </Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
)