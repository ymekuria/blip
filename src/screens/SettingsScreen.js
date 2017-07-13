import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon  } from 'react-native-elements';

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
        <Card>
          <Button 

          />
        </Card>
      </View>
    );  
  }
}

export default SettingsScreen;

