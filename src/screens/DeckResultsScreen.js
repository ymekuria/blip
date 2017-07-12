import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Icon } from 'react-native-elements';

import SwipeDeck from '../components/SwipeDeck';
import DeckEvent from '../components/DeckEvent';
import * as actions from '../actions';

class DeckResultsScreen extends Component {
  static navigationOptions = {
    title: 'Events',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="description" color={tintColor} size={30} />
    }
  }

  renderCard(event, topCard) {
    return (
      <DeckEvent event={event} topCard={topCard} />
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

