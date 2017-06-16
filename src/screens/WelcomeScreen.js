import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

const slideText = [
  { text: 'Lorem ipsum dolor sit amet', color: '#009688' },
  { text: 'Accusamus complectitur sit cu', color: '#009688' },
  { text: 'Cetero vituperatoribus no quo', color: '#009688' }
];

class WelcomeScreen extends Component {
  renderSlides() {
    return slideText.map(slide => {
      return (
        <View
          key={slide.text}
        >
          <Text>{slide.text}</Text>
        </View>
      );
    });
  }

  render() {

    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      > 
        {this.renderSlides()}
      </ScrollView>
    );  
  }
}

export default WelcomeScreen;


