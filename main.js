import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomScreen from './src/screens/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomScreen />
      </View>
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
