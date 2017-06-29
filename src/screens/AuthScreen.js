import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.facebookLogin();
  }

  // navigating the user to the map search screen if a token is created from FB Auth
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('mapSearch');
    }
  }

  render() {
    return (
      <View> 
      </View>
    );  
  }
}

function mapStateToProps(state) {
  return { token: state.auth.token }
}

export default  connect(mapStateToProps, actions)(AuthScreen);

