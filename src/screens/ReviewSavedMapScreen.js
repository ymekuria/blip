import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewSavedMapScreen extends Component {
	createMarkers() {
		return this.props.savedEvents.map(event => (
			<MapView.Marker
				coordinates={{ latitude: event.location.lat, longitude: event.location.lng }}
			/>
		))
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				
			</View>		
		);	
	}
}

function mapStateToProps({ savedEvents }) {
	return { savedEvents }
}

export default ReviewSavedMapScreen