import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';

class ReviewSavedScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Saved Events',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" color={tintColor} size={30} />;
    },
    headerRight: (
      <Button
        title="View Map"
        onPress={() => navigation.navigate('savedMap')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    )
  });

  renderSavedEvents() {
    return this.props.savedEvents.map(({ displaName, location, venue, id }) => {
      const initialRegion = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };
      // TODO: add custom map markers
      return (
        <Card title={displaName} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
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
          <Button
            title="Buy Tickets"
            backgroundColor="#03A9F4"
            onPress={() => Linking.openURL(venue.uri)}
          />
        </Card>
      );
    });
  }

  render() {
    return <ScrollView>{this.renderSavedEvents()}</ScrollView>;
  }
}

function mapStateToProps({ savedEvents }) {
  return { savedEvents };
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default connect(mapStateToProps)(ReviewSavedScreen);
