import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteSavedEvents } from '../actions';


class SettingsScreen extends Component {
static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="settings" color={tintColor} size={30} />
    }
  }

  onButtonPress = () => {
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

export default connect(null,{ deleteSavedEvents})(SettingsScreen);
