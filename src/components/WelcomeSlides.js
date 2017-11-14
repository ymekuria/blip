import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class WelcomeSlides extends Component {
  renderSlides() {
    return this.props.slideData.map(slide => {
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
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
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
};

export default WelcomeSlides;
