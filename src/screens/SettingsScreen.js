import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class SettingsScreen extends Component {
static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="settings" color={tintColor} size={30} />
    }
  }    
  render() {
    return (
      <View> 
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text> 
      </View>
    );  
  }
}

export default SettingsScreen;

