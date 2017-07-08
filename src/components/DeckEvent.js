import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card } from 'react-native-elements';

class DeckEvent extends Component {
	render() {
		const { displayName, location, venue } = this.props.event;
    const initialRegion = { 
      latitude: location.lat, 
      longitude: location.lng,
      latitudeDelta: .045,
      longitudeDelta: .02
    }		
    
    if (this.props.topCard) {
  		return (
        <Card title={displayName}>
          <View style={{ height: 300 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
              cacheEnabled={Platform.OS === 'android'}
            >
            <MapView.Marker
              coordinate={{ latitude: location.lat, longitude: location.lng }}
            />
            </MapView>          
          </View>
          <View style={styles.detailWrapper}>
            <Text>{venue.displayName}</Text>
            <Text>{location.city.split(',')[0]}</Text>       
          </View>
        </Card>
      );
    } else {
      return (
        <Card title={displayName}>
          <View style={{ height: 300 }}>
          </View>
          <View style={styles.detailWrapper}>
            <Text>{venue.displayName}</Text>
            <Text>{location.city.split(',')[0]}</Text>       
          </View>
        </Card>
      );      
    }  
	}
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

export default DeckEvent