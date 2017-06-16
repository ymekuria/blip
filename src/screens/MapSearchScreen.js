import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo'

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
  componentDidMount() {
    // getting the current location of the device to show initial map region
    navigator.geolocation.getCurrentPosition(position => {
        // const { latitude, longitude } = position.coords;
        const region = {
          latitude: position.cords.latitude,
          longitude: position.cords.longitude,
          latitudeDelta: .05,
          longitudeDelta: .1
        };

        this.setState({ region });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    ); 

  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.state.region}
      />
    );
  }
}

export default MapSearchScreen;

