import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import WelcomeSlides from '../components/WelcomeSlides';

const slideData = [
  { text: 'Lorem ipsum dolor sit amet', color: '#009688' },
  { text: 'Accusamus complectitur sit cu', color: '#009688' },
  { text: 'Cetero vituperatoribus no quo', color: '#009688' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <WelcomeSlides slideData={slideData}/>
    );  
  }
}

export default WelcomeScreen;


