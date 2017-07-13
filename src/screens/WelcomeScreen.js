import React, { Component } from 'react';
import { 
	ScrollView, 
	View, 
	Text, 
	Dimensions,
	AsyncStorage 
} from 'react-native';
import { AppLoading } from 'expo';

import WelcomeSlides from '../components/WelcomeSlides';
import { connect } from 'react-redux';
import * as actions from '../actions'; 

// TODO: design welcome screen ux for forst time users
const slideData = [
  { text: 'Lorem ipsum dolor sit amet', color: '#009688' },
  { text: 'Accusamus complectitur sit cu', color: '#009688' },
  { text: 'Cetero vituperatoribus no quo', color: '#009688' }
];

class WelcomeScreen extends Component {
	state = {
		mapLoaded: false
	}
	// only rendering the welcome screen flow for first time users.
	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token'); 

		this.setState({ mapLoaded: true });

		if (token) {
			this.props.navigation.navigate('mapSearch');
		}
	}

  render() {
  	if (!this.state.mapLoaded) {
  		return <AppLoading />
  	} else {
	    return (
	      <WelcomeSlides slideData={slideData}/>
	    );  
	  }  
  }
}

function mapStateToProps({ auth }) {
	return { auth };

}

export default connect(mapStateToProps, actions)(WelcomeScreen);


