import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import SwipeDeck from '../components/SwipeDeck';

class DeckResultsScreen extends Component {
  renderCard(event) {
    const initialRegion = { 
      latitude: event.location.lat, 
      longitude: event.location.lng,
      latitudeDelta: .045,
      longitudeDelta: .02
    }
    console.log('event ', event);
    console.log('initialRegion: ', initialRegion );

    return (
      <Card title={event.displayName}>
        <View style={{ height: 300 }}>

        </View>
        <View style={styles.detailWrapper}>
          <Text>{event.venue.displayName}</Text>
          <Text>{event.location.city.split(',')[0]}</Text>       
        </View>
      </Card>
    );

  }

  onSwipeRight = (event) => {
    this.props.saveEvent(event)
  } 

  render() {
    return (
      <View> 
        <SwipeDeck 
          cardData={this.props.events} 
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={this.onSwipeRight}
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

