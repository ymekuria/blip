import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import DeckResultsScreen from './src/screens/DeckResultsScreen';
import MapSearchScreen from './src/screens/MapSearchScreen';
import ReviewSavedScreen from './src/screens/ReviewSavedScreen';
import SettingsScreen from './src/screens/SettingsScreen';

class App extends Component {
  render() {
    const mainOptions = {
      navigationOptions: {
        tabBarVisible: true
      },
      Lazy: true
    }

    const AppNavigation = TabNavigator({
      mapSearch: { screen: MapSearchScreen},
      searchResults: { screen: DeckResultsScreen },
      review: { 
        screen: StackNavigator({
          review: { screen: ReviewSavedScreen },
          settings: { screen: SettingsScreen }
        })
      }
    })

    const MainNavigation = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      app: { screen: AppNavigation }
      }
    )
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
