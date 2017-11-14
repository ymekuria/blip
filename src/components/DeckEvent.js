import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Icon } from 'react-native-elements';
import moment from 'moment';

class DeckEvent extends Component {
  renderMap() {
    const { location, venue } = this.props.event;
    const initialRegion = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    if (this.props.topCard) {
      return (
        <MapView
          scrollEnabled={false}
          style={{ flex: 1 }}
          initialRegion={initialRegion}
        >
          <MapView.Marker
            coordinate={{ latitude: location.lat, longitude: location.lng }}
            description={venue.displayName}
          />
        </MapView>
      );
    }
  }

  render() {
    const { displayName, location, venue, start } = this.props.event;

    return (
      <Card
        title={displayName.split('at ')[0]}
        containerStyle={styles.cardContainerStyle}
      >
        <View style={styles.detailWrapper}>
          <View style={styles.iconWrapper}>
            <Icon name="location-on" color="#009688" size={20} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 10 }}>
                {venue.displayName}
              </Text>
              <Text style={{ fontSize: 6 }}>{location.city.split(',')[0]}</Text>
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <Icon name="schedule" color="#009688" size={20} />
            <Text style={{ fontSize: 12 }}>{`${moment(
              start.time,
              'HH:mm'
            ).format('h:mm a')}`}</Text>
          </View>
        </View>
        <View style={{ height: 200 }}>{this.renderMap()}</View>
      </Card>
    );
  }
}

const styles = {
  cardContainerStyle: {
    borderRadius: 10
  },
  iconWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start'
  },

  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  venueDetail: {
    flexDirection: 'column'
  }
};

export default DeckEvent;
