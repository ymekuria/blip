import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Button, Icon, Card } from 'react-native-elements';

import * as actions from '../actions';

class MapSearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="my-location" color={tintColor} size={30} />
    }
  }  
  // setting initial map region to San Francisco
  state = {
    region: {
      latitude: 37.7749,
      longitude: -122.4194,
      latitudeDelta: 0.05,
      longitudeDelta: 0.1,
    }
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

  onButtonPress = () => {
    const location = this.state.region;
    // passing a callback that has access to navigation for navigating after api call
    this.props.fetchEvents(location, () => this.props.navigation.navigate('searchResults'));
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
// #006c6c

const styles = {
  buttonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 20    
  }
}

export default connect(null, actions)(MapSearchScreen);

