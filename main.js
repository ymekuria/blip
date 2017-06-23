import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import DeckResultsScreen from './src/screens/DeckResultsScreen';
import MapSearchScreen from './src/screens/MapSearchScreen';
import ReviewSavedScreen from './src/screens/ReviewSavedScreen';
import SettingsScreen from './src/screens/SettingsScreen';

class App extends Component {
  render() {
    // Lazy option prevents the navigator from rendering all the screens initially
    const mainNavOptions = {
      navigationOptions: {
        tabBarVisible: true
      },
      lazy: true
    }

    const appNavOptions = {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        fontSize: 12
      }
    }

    const appNavigation = TabNavigator({
      mapSearch: { screen: MapSearchScreen},
      searchResults: { screen: DeckResultsScreen },
      review: { 
        screen: StackNavigator({
          review: { screen: ReviewSavedScreen },
          settings: { screen: SettingsScreen }
        })
      }
    }, appNavOptions);

    const MainNavigation = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      app: { screen: appNavigation }
    }, mainNavOptions);
    
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
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
