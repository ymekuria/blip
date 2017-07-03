import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Button, Icon, Card } from 'react-native-elements';

import * as actions from '../actions';

class MapSearchScreen extends Component {
  // setting initial map region to San Francisco
  state = {
    region: {
      latitude: 37.3861,
      longitude: -122.0839,
      latitudeDelta: 0.05,
      longitudeDelta: 0.1,
    }
  }

  componentWillMount() {
    this.props.fetchEvents();
  }
  componentDidMount() {
    // getting the current location of the device to show initial map region
    navigator.geolocation.getCurrentPosition(position => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: .05,
        longitudeDelta: .1
      };
      this.setState({ region });
    },
    (error) => console.log(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  ); 

  }

  // called with a new region object everytime a user completes a gesture on the map
  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  // TODO: create action creator to fetch search results when button is pressed
  onButtonPress = () => {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />

        <View style={styles.buttonContainer}>
          <Button 
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search'}}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    ); 
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 20    
  }
}

export default connect(null, actions)(MapSearchScreen);

