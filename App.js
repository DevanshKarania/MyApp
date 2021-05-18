import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen';
import {AppTabNavigator} from './components/appTabNavigator';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  BottomTab:{screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);