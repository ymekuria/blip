import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckResultsScreen extends Component {
  componentDidMount() {
    console.log('props: ', this.props.events);
  }
  render() {
    return (
      <View> 
        <Text>DeckResultsScreen</Text>
        <Text>DeckResultsScreen</Text>
        <Text>DeckResultsScreen</Text>
        <Text>DeckResultsScreen</Text> 
      </View>
    );  
  }
}

function mapStateToProps({ events }) {
  return { events }
}

export default connect(mapStateToProps)(DeckResultsScreen);

