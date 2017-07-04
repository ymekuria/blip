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
    const initialRegion = { 
      latitude: event.location.lat, 
      longitude: event.location.lng,
      latitudeDelta: .045,
      longitudeDelta: .02
    }

    return (
      <Card title={event.displayName}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
          >
          </MapView>
        </View>
        <View>
        <Button
          title="Buy Tickets"
          backgroundColor="#009688"
          onPress={() => Linking.openURL(event.uri)}
        />          
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

export default connect(mapStateToProps)(DeckResultsScreen);

