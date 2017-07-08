import React, { Component } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card } from 'react-native-elements';
import SwipeDeck from '../components/SwipeDeck';
import * as actions from '../actions';

class DeckResultsScreen extends Component {
  renderCard(event) {
    return (
      <DeckEvent event={event} />
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

export default connect(mapStateToProps, actions)(DeckResultsScreen);

