import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import { Button, Icon, Card } from 'react-native-elements';

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

  // called with a new region object everytime a user completes a gesture on the map
  onRegionChangeComplete = (region) => {
    this.setState({ region });
    console.log('state:', this.state);
  }

  // TODO: create action creator to fetch search results when button is pressed
  onButtonPress = () => {

  }

  render() {
    console.log(`this.state in render method: `, this.state);
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

export default MapSearchScreen;

