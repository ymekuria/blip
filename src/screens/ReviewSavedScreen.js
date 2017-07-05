import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
class ReviewSavedScreen extends Component {
  componentWillMount() {
    console.log('saved Props:', this.props);
  }
  render() {
    return (
      <View> 
        <Text>ReviewSavedScreen</Text>
        <Text>ReviewSavedScreen</Text>
        <Text>ReviewSavedScreen</Text>
        <Text>ReviewSavedScreen</Text> 
      </View>
    );  
  }
}

function mapStateToProps({ savedEvents }) {
  return { savedEvents }
}
export default connect(mapStateToProps)(ReviewSavedScreen);

