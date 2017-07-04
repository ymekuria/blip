import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import SwipeDeck from '../components/SwipeDeck';

class DeckResultsScreen extends Component {
  componentDidMount() {
    console.log('props: ', this.props.events);
  }

  renderCard(event) {
    const { displayName, venue, location } = event;
    const initialRegion = { 
      latitude: location.lat, 
      longitude: location.lng,
      latitudeDelta: .045,
      longitudeDelta: .02
    }


    return (
      <Card title={displayName}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
          >
          <MapView.Marker
            coordinate={{latitude: location.lat, longitude: location.lng }}
          />
          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{venue.displayName}</Text>
          <Text>{location.city.split(',')[0]}</Text>       
        </View>
      </Card>
    );

  } 

  render() {
    return (
      <View> 
        <SwipeDeck 
          cardData={this.props.events} 
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        /> 
      </View>
    );  
  }
}

function mapStateToProps({ events }) {
  return { events }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

export default connect(mapStateToProps)(DeckResultsScreen);

