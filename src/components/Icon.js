import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { getWeatherIcon } from '../utils/getImageForWeather';

const Icon = ({ code }) => <Image source={getWeatherIcon(code)} />;

Icon.propTypes = {
  code: PropTypes.string.isRequired
};

export default Icon;
