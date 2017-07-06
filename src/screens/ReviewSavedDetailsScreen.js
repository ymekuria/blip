import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

class ReviewSavedScreen extends Component {
  renderSavedEvents() {
    return this.props.savedEvents.map(event => {
      const { displaName, location, venue, id } = event;
      const initialRegion = { 
        latitude: location.lat, 
        longitude: location.lng,
        latitudeDelta: .045,
        longitudeDelta: .02
      }
      // TODO: add custom map markers
      return (
        <Card title={displaName} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              cacheEnabled={Platform.OS === 'android'}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
            >
              <MapView.Marker
                coordinate={{ latitude: location.lat, longitude: location.lng }}       
              />
            </MapView>
          </View>
          <View style={styles.detailWrapper}>
            <Text>{venue.displayName}</Text>
            <Text>{location.city.split(',')[0]}</Text>
          </View>
          <Button
            title="Buy Tickets"
            backgroundColor="#03A9F4"
            onPress={() => Linking.openURL(venue.uri)}
          />
        </Card>
      );
    });
  }

  render() {
   return (
      <View style={{ flex: 1 }}> 
        {this.renderSavedEvents()}     
      </View>
    );  
  }
}

function mapStateToProps({ savedEvents }) {
  return { savedEvents }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

export default connect(mapStateToProps)(ReviewSavedScreen);

