import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

class ReviewSavedScreen extends Component {
  renderSavedEvents() {

    return this.props.savedEvents.map(event => {
      const { displaName, location, venue } = event;
      const initialRegion = { 
        latitude: location.lat, 
        longitude: location.lng,
        latitudeDelta: .045,
        longitudeDelta: .02
      }

      return (
        <Card title={displaName}>
          <View style={{ height: 200 }}>
            <MapView
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
          />
        </Card>
      )
    })
  }
  render() {
    return (
      <View> 
        {this.renderSavedEvents()} 
      </View>
    );  
  }
}

function mapStateToProps({ savedEvents }) {
  return { savedEvents }
}

const style = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

export default connect(mapStateToProps)(ReviewSavedScreen);

