import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import DeckResultsScreen from './src/screens/DeckResultsScreen';
import MapSearchScreen from './src/screens/MapSearchScreen';
import ReviewSavedScreen from './src/screens/ReviewSavedScreen';

class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen }

    }, 

 {
  navigationOptions: {
    tabBarVisible: true,
  },
  Lazy: true

} 

  );
    return (
        <MainNavigator />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
