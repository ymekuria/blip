import React, { Component } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card } from 'react-native-elements';
import SwipeDeck from '../components/SwipeDeck';
import * as actions from '../actions';

class DeckResultsScreen extends Component {
  renderCard({ location, displayName, venue }) {
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
            cacheEnabled={Platform.OS === 'android'}
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
      </Card>
    );

  }

  onSwipeRight = (event) => {
    this.props.saveEvent(event)
  } 

  render() {
    console.log('this' )
    return (
      <ScrollView> 
        <SwipeDeck 
          cardData={this.props.events} 
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={this.onSwipeRight}
        /> 
      </ScrollView>
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

export default connect(mapStateToProps, actions)(DeckResultsScreen);

