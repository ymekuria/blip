import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import moment from 'moment'
import { Card, Icon } from 'react-native-elements';

class DeckEvent extends Component {
	render() {
		const { displayName, location, venue, start } = this.props.event;
    const initialRegion = { 
      latitude: location.lat, 
      longitude: location.lng,
      latitudeDelta: .045,
      longitudeDelta: .02
    }		
    
    if (this.props.topCard) {
  		return (
        <Card title={displayName.split('at')[0]}>
          <View style={styles.detailWrapper}>
            <Icon name='location-on' />
            <Text>{`${venue.displayName} ${moment(start.time, 'HH:mm').format('h:mm a')}`}</Text>
            <Text>{location.city.split(',')[0]}</Text>       
          </View>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
              cacheEnabled
            >
            <MapView.Marker
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              description={venue.displayName}
            />
            </MapView>          
          </View>
        </Card>
      );
    } else {
      return (
        <Card title={displayName.split('at')[0]}>
          <View style={{ height: 200 }}>
                 
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