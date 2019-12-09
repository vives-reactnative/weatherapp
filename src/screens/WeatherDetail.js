import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { getWeatherBackground } from '../utils/getImageForWeather';

class WeatherDetail extends Component {
  render() {
    const { container, largeText, textStyle, smallText } = styles;

    return (
      <ImageBackground
        source={getWeatherBackground('clear')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={container}>
          <Text style={[largeText, textStyle]}>Hoofdstad</Text>
          <Text style={[smallText, textStyle]}>Subtitle uit weercondities</Text>
          <Text style={[largeText, textStyle]}>15,3°C</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  largeText: {
    fontSize: 50
  },
  smallText: {
    fontSize: 25
  }
});

export default WeatherDetail;
