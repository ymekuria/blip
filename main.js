import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import DeckResultsScreen from './src/screens/DeckResultsScreen';
import MapSearchScreen from './src/screens/MapSearchScreen';
import ReviewSavedDetailsScreen from './src/screens/ReviewSavedDetailsScreen';
import ReviewSavedMapScreen from './src/screens/ReviewSavedMapScreen';
import SettingsScreen from './src/screens/SettingsScreen';

class App extends Component {
  render() {
    // Lazy option prevents the navigator from rendering all the screens initially
    const mainNavOptions = {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    };

    const appNavOptions = {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        fontSize: 12
      },
      lazy: true
    };

    const appNavigation = TabNavigator(
      {
        mapSearch: { screen: MapSearchScreen },
        searchResults: { screen: DeckResultsScreen },
        review: {
          screen: StackNavigator({
            review: { screen: ReviewSavedDetailsScreen },
            savedMap: { screen: ReviewSavedMapScreen }
          })
        },
        settings: { screen: SettingsScreen }
      },
      appNavOptions
    );

    const MainNavigation = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        app: { screen: appNavigation }
      },
      mainNavOptions
    );

    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

Expo.registerRootComponent(App);
