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
    console.log('in compmount')
    // getting the current location of the device to show initial map region
    navigator.geolocation.getCurrentPosition(position => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: .05,
        longitudeDelta: .1
      };
      console.log('current position: ', region);
      this.setState({ region });
      console.log('state after lookup: ',this.state);
    },
    (error) => console.log(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  ); 

  }
  render() {
    console.log('this.state in render mehtod: ', this.state)
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.state.region}
      />
    );
  }
}

export default MapSearchScreen;

