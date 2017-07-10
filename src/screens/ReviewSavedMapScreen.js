import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import moment from 'moment';

class ReviewSavedMapScreen extends Component {
	componentWillMount() {
		console.log('this.props ', this.props)
	}
	createMarkers() {
		return this.props.savedEvents.map(event => (
			<MapView.Marker
				key={event.id}
				coordinate={{ latitude: event.location.lat, longitude: event.location.lng }}
				title={`${event.venue.displayName} ${moment(event.start.time, 'HH:mm').format('h:mm a')}`}
			/>
		))
	}
	render() {
		const { location } = this.props.savedEvents[0]
    const initialRegion = { 
      latitude: location.lat, 
      longitude: location.lng,
      latitudeDelta: 1.2,
      longitudeDelta: .5
    };
		
		return (
			<View style={{ flex: 1 }}>
				<MapView
					style={{ flex: 1 }}
					initialRegion={initialRegion}
				>	
					{this.createMarkers()}
				</MapView>
			</View>		
		);	
	}
}

function mapStateToProps({ savedEvents }) {
	return { savedEvents }
}

export default connect(mapStateToProps)(ReviewSavedMapScreen)