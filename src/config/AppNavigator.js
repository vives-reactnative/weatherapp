import { createStackNavigator } from 'react-navigation-stack';

import WeatherOverview from '../screens/WeatherOverview';
import WeatherDetail from '../screens/WeatherDetail';
import AddLocation from '../screens/AddLocation';

const MainStack = createStackNavigator({
  Overview: {
    screen: WeatherOverview
  },
  Detail: {
    screen: WeatherDetail
  }
});

export const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Add: {
      screen: AddLocation
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
