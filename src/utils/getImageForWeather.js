/* eslint-disable global-require */

const images = {
  rain: {
    icon: require('../../assets/icon/weather-rainy.png'),
    background: require('../../assets/rain.jpg')
  },
  clear: {
    icon: require('../../assets/icon/weather-sunny.png'),
    background: require('../../assets/sunny.jpg')
  },
  lightning: {
    icon: require('../../assets/icon/weather-lightning.png'),
    background: require('../../assets/lightning.jpg')
  },
  clouds: {
    icon: require('../../assets/icon/weather-cloudy.png'),
    background: require('../../assets/clouds.jpg')
  },
  snow: {
    icon: require('../../assets/icon/weather-snowy.png'),
    background: require('../../assets/snow.jpg')
  },
  mist: {
    icon: require('../../assets/icon/weather-fog.png'),
    background: require('../../assets/mist.jpg')
  }
};

export const getWeatherIcon = weertype => images[weertype].icon;
export const getWeatherBackground = weertype => images[weertype].background;
