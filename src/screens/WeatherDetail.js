import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { weerCondities } from '../config/weerCondities';
import { getWeatherBackground } from '../utils/getImageForWeather';

class WeatherDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.state.params.location.name,
    headerLayoutPreset: 'center'
  });

  constructor(props) {
    super(props);
    this.state = {};
    const { navigation } = this.props;
    this.location = navigation.getParam('location');

    this.weersConditie = weerCondities.find(c => c.code === this.location.code);
  }

  render() {
    const { container, largeText, textStyle, smallText } = styles;

    return (
      <ImageBackground
        source={getWeatherBackground(this.location.code)}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={container}>
          <Text style={[largeText, textStyle]}>{this.location.name}</Text>
          <Text style={[smallText, textStyle]}>{this.weersConditie.title}</Text>
          <Text style={[largeText, textStyle]}>{this.location.degreesCelcius}°C</Text>
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
