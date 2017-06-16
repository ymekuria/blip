import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';

const slideText = [
  { text: 'Lorem ipsum dolor sit amet', color: '#009688' },
  { text: 'Accusamus complectitur sit cu', color: '#009688' },
  { text: 'Cetero vituperatoribus no quo', color: '#009688' }
];

const SCREEN_WIDTH = Dimensions.get('window').width;

class WelcomeScreen extends Component {
  renderSlides() {
    return slideText.map(slide => {
      return (
        <View
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
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

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },

  textStyle: {
    fontSize: 30,
    textAlign: 'center'
    
  }
}

export default WelcomeScreen;


