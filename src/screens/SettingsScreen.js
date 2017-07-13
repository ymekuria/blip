import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SettingsScreen extends Component {
static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="settings" color={tintColor} size={30} />
    }
  }

  onButtonPress = () => {
    console.log('this.props: ', this.props);
    this.props.deleteSavedEvents();
  }    

  render() {
    return (
      <View> 
        <Card>
          <Button 
            title="Delete Saved Events"
            onPress={this.onButtonPress}
          />
        </Card>
      </View>
    );  
  }
}

export default connect(null, actions)(SettingsScreen);

