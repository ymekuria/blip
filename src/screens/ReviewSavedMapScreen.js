import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewSavedMapScreen extends Component {
	render() {
		return (
			<View>
				<Text>ReviewMapScreen</Text>
				<Text>ReviewMapScreen</Text>
				<Text>ReviewMapScreen</Text>
				<Text>ReviewMapScreen</Text>
			</View>		
		);	
	}
}

function mapStateToProps({ savedEvents }) {
	return { savedEvents }
}

export default ReviewSavedMapScreen